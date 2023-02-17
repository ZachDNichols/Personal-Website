FROM rust as planner
WORKDIR /server
RUN cargo install cargo-chef
COPY . .
RUN cargo chef prepare --recipe-path recipe.json

FROM rust as cacher
WORKDIR /server
RUN cargo install cargo-chef
COPY --from=planner /server/recipe.json recipe.json
RUN cargo chef cook --release --recipe-path recipe.json

FROM rust as builder

COPY . /server

WORKDIR /server

COPY --from=cacher /server/target target
COPY --from=cacher /usr/local/cargo /usr/local/cargo

RUN cargo build --release

FROM gcr.io/distroless/cc-debian11

COPY --from=builder /server/target/release/server /server/server
WORKDIR /server

CMD ["./server"]