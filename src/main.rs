#[macro_use] extern crate rocket;


use rocket::{fs::NamedFile, response::Redirect};
use std::path::{Path, PathBuf};


#[get("/")]
fn index() -> Redirect {
    let redirect = Redirect::to(uri!("/home"));
    redirect
}

#[get("/home")]
async fn home () -> Option<NamedFile> {
    NamedFile::open("client/index.html").await.ok()
}


#[get("/<file..>")]
async fn files(file: PathBuf) -> Option<NamedFile> {
    NamedFile::open(Path::new("client").join(file)).await.ok()
}


#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index, home, files])
}