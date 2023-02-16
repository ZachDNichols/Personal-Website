FROM rust AS builder
COPY . .
RUN cargo build --release

FROM debian:buster-slim
COPY --from=builder /target/release/server /target/release/server
CMD ["/target/release/server"]