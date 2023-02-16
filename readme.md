# Currently a work in progress
Feel free to contribute code optimizations/fixes, but the content of the website should stay the same.

## Rust Dependencies
<pre>
[dependencies]
reqwest = { version = "0.11.14", features = ["json"] }
futures = "0.3.26"
tokio = { version = "1.25.0", features = ["full"] } # for our async runtime
rocket = "0.5.0-rc.2"
</pre>