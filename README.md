# rust-wasm-prost

[![License](https://img.shields.io/badge/Licence-MIT-blue.svg)](https://github.com/utilForever/rust-wasm-prost/blob/main/LICENSE) [![Check](https://github.com/utilForever/rust-wasm-prost/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/utilForever/rust-wasm-prost/actions/workflows/main.yml)

This repository is a simple code for checking crate 'prost' on WebAssembly (🦀 + 🕸️ = 💖).

## What is `prost`?

`prost` is a [Protocol Buffers](https://developers.google.com/protocol-buffers/) implementation for the [Rust Language](https://www.rust-lang.org/). `prost` generates simple, idiomatic Rust code from `proto2` and `proto3` files.

## How to serialize/deserialize Protocol Buffers data?

1. Byte Stream: Check `src/example_byte_stream.rs` and `www/example_byte_stream.ts`.
2. JSON: Check `src/example_json.rs` and `www/example_json.ts`.

## Protocol Buffers Struct in Example

You can see in `proto` folder.

### Simple

```protobuf
syntax = "proto3";

package rust_wasm_prost.simple;

message Student {
  string name = 1;
  int32 age = 2;
  float height = 3;
  float weight = 4;
  repeated int32 grades = 5;
}
```

### Complex

```protobuf
syntax = "proto3";

package rust_wasm_prost.complex;

message FruitCondition {
  repeated float brix = 1;
  string origin = 2;
}

message VegetableCondition {
  repeated string nutrients = 1;
  string origin = 2;
}

message Item {
  int32 unique_id = 1;

  message Information {
    string name = 1;
    int32 count = 2;

    enum Type {
      FRUIT = 0;
      VEGETABLE = 1;
    }
    Type type = 3;
  }
  Information information = 2;

  oneof condition {
    FruitCondition fruit_condition = 3;
    VegetableCondition vegetable_condition = 4;
  }
}

```

## Requirements

* [The Rust Toolchain](https://www.rust-lang.org/tools/install)
* [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/)
* [prost](https://github.com/tokio-rs/prost)
* [serde](https://serde.rs/)
* [ts-protoc-gen](https://github.com/improbable-eng/ts-protoc-gen)
* [npm](https://docs.npmjs.com/getting-started)

## Quick Start

### Rust + WebAssembly

1. Run this command inside the project directory:

```sh
wasm-pack build
```

### WebAssembly with TypeScript

1. Ensure that the local development server and its dependencies are installed by running this command within the `www` subdirectory:
```sh
npm install
```

2. Run this command from within the `www` subdirectory:
```sh
npm run start
```

3. Go to `http://localhost:8080/`

## Contact

You can contact me via e-mail (utilForever at gmail.com). I am always happy to answer questions or help with any issues you might have, and please be sure to share any additional work or your creations with me, I love seeing what other people are making.

## License

<img align="right" src="http://opensource.org/trademarks/opensource/OSI-Approved-License-100x137.png">

The class is licensed under the [MIT License](http://opensource.org/licenses/MIT):

Copyright &copy; 2022 [Chris Ohk](https://github.com/utilForever).

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
