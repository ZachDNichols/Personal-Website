# Check out the current website <a href = "https://zachdnichols.com/home">here</a>!

# <u>*Always*</u> a work in progress...
Feel free to suggest code optimizations, fixes, or word changes, but the content of the website should stay the same.

## Rust Dependencies for Backend
<pre>
[dependencies]
reqwest = { version = "0.11.14", features = ["json"] }
futures = "0.3.26"
tokio = { version = "1.25.0", features = ["full"] } # for our async runtime
rocket = "0.5.0-rc.2"
</pre>