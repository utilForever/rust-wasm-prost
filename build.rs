use std::io::Result;

fn main() -> Result<()> {
    let mut prost_build = prost_build::Config::new();
    prost_build.type_attribute(
        "rust_wasm_prost.simple.Student",
        "#[derive(serde::Serialize, serde::Deserialize)]",
    );
    prost_build.type_attribute(
        "rust_wasm_prost.complex.Item.Information",
        "#[derive(serde::Serialize, serde::Deserialize)]",
    );
    prost_build.type_attribute(
        "rust_wasm_prost.complex.FruitCondition",
        "#[derive(serde::Serialize, serde::Deserialize)]",
    );
    prost_build.type_attribute(
        "rust_wasm_prost.complex.VegetableCondition",
        "#[derive(serde::Serialize, serde::Deserialize)]",
    );
    prost_build.type_attribute(
        "rust_wasm_prost.complex.Item.condition",
        "#[derive(serde::Serialize, serde::Deserialize)]",
    );
    prost_build.type_attribute(
        "rust_wasm_prost.complex.Item",
        "#[derive(serde::Serialize, serde::Deserialize)]",
    );
    prost_build.include_file("protobuf.rs");
    prost_build.compile_protos(&["proto/simple.proto", "proto/complex.proto"], &["proto/"])?;
    Ok(())
}
