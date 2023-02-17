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

ENV USER=web
ENV UID=1001

RUN adduser \
    --disabled-password \
    --gecos "" \
    --home "/nonexistent" \
    --shell "/sbin/nologin" \
    --no-create-home \
    --uid "${UID}" \
    "${USER}"
    

COPY . /server

WORKDIR /server

COPY --from=cacher /server/target target
COPY --from=cacher /usr/local/cargo /usr/local/cargo

RUN cargo build --release

FROM gcr.io/distroless/cc-debian11

COPY --from=builder /etc/passwd /etc/passwd
COPY --from=builder /etc/group /etc/group

COPY --from=builder /server/target/release/server /server/server
WORKDIR /server

USER web:web

CMD ["./server"]