#[macro_use] extern crate rocket;


use reqwest::header::{USER_AGENT, HeaderMap};
use rocket::{fs::NamedFile, response::{Redirect}};
use std::path::{Path, PathBuf};
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
struct APIResponse {
    items: Items<Repository>,
}

#[derive(Serialize, Deserialize, Debug)]
struct Items<T> {
    items: Vec<T>,
}

#[derive(Serialize, Deserialize, Debug)]
struct Repository {
    title: String,
}



#[get("/")]
fn index() -> Redirect {
    let redirect = Redirect::to(uri!("/home"));
    redirect
}

#[get("/home")]
async fn home () -> Option<NamedFile> {
    NamedFile::open("client/index.html").await.ok()
}

#[get("/contact")]
async fn contact () -> Option<NamedFile> {
    NamedFile::open("client/contact.html").await.ok()
}

#[get("/<file..>")]
async fn files(file: PathBuf) -> Option<NamedFile> {
    NamedFile::open(Path::new("client").join(file)).await.ok()
}

#[get("/projects")]
async fn projects() -> Option<NamedFile> {
    NamedFile::open("client/projects.html").await.ok()
}

#[get("/github")]
async fn github() -> String {
    let result = get_repos().await;

    println!("{:?}", result);

    let response = result.unwrap();

    response
}

async fn get_repos() -> Result<String, reqwest::Error>
{
    let mut header = HeaderMap::new();

    header.insert(USER_AGENT, reqwest::header::HeaderValue::from_static("User"));
    header.insert(reqwest::header::CONTENT_TYPE, "application/json".parse().unwrap());
    header.insert(reqwest::header::ACCEPT, "application/vnd.github+json".parse().unwrap());

    let response = reqwest::Client::new()
        .get("https://api.github.com/users/ZachDNichols/repos")
        .headers(header)
        .send()
        .await?
        .text()
        .await?;

    Ok(response)
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index, home, files, contact, projects, github])
}