#[macro_use] extern crate rocket;


use std::fs::File;

use rocket::{response::{Redirect}, fs::FileServer};

#[get("/")]
fn index() -> Redirect {
    let redirect = Redirect::to(uri!("/home"));
    redirect
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index])
}