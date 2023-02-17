#[macro_use] extern crate rocket;

use reqwest::header::{USER_AGENT, HeaderMap};
use rocket::{fs::NamedFile, response::{Redirect}};
use rocket::fs::{FileServer, relative};

#[get("/")]
fn index() -> Redirect {
    let redirect = Redirect::to(uri!("/home"));
    redirect
}

#[get("/home")]
async fn home () -> Option<NamedFile> {
    NamedFile::open("index.html").await.ok()
}

#[get("/contact")]
async fn contact () -> Option<NamedFile> {
    NamedFile::open("contact.html").await.ok()
}

#[get("/projects")]
async fn projects() -> Option<NamedFile> {
    NamedFile::open("projects.html").await.ok()
}

#[get("/github")]
async fn github() -> String {
    let mut header = HeaderMap::new();

    header.insert(USER_AGENT, reqwest::header::HeaderValue::from_static("User"));
    header.insert(reqwest::header::CONTENT_TYPE, "application/json".parse().unwrap());
    header.insert(reqwest::header::ACCEPT, "application/vnd.github+json".parse().unwrap());

    let response = reqwest::Client::new()
        .get("https://api.github.com/users/ZachDNichols/repos")
        .headers(header)
        .send()
        .await
        .unwrap()
        .text()
        .await;

    response.unwrap()
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index, home, contact, projects, github])
        .mount("/", FileServer::from(relative!("")))
}