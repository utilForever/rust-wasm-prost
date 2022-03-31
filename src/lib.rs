include!(concat!(env!("OUT_DIR"), "/protobuf.rs"));

extern crate web_sys;

use wasm_bindgen::prelude::*;

use crate::rust_wasm_prost::simple::Student;
use crate::rust_wasm_prost::complex::Item;

// A macro to provide 'println!(..)'-style syntax for 'console.log' logging.
#[allow(unused_macros)]
macro_rules! log {
    ( $( $t:tt )* ) => {
        web_sys::console::log_1(&format!( $( $t )* ).into())
    }
}

#[wasm_bindgen]
pub fn convert_proto_student_ts_to_rust(data: String) {
    // In TypeScript, keyword 'repeated' adds the postfix 'List' to member variable.
    // Therefore, we need to remove the postfix 'List' to make it work in Rust.
    let data = str::replace(&data, "gradesList", "grades");

    let student: Student = serde_json::from_str(data.as_str()).unwrap();
    log!("{:?}", student);
}

#[wasm_bindgen]
pub fn convert_proto_student_rust_to_ts() -> String {
    let student = Student {
        name: "John".to_string(),
        age: 20,
        height: 182.4,
        weight: 76.2,
        grades: vec![88, 75, 92],
    };

    serde_json::to_string(&student).unwrap()
}

#[wasm_bindgen]
pub fn convert_proto_item_ts_to_rust(data: String) {
    // In TypeScript, keyword 'repeated' adds the postfix 'List' to member variable.
    // Therefore, we need to remove the postfix 'List' to make it work in Rust.
    let data = str::replace(&data, "uniqueId", "unique_id");
    let data = str::replace(&data, "brixList", "brix");
    let data = str::replace(&data, "nutrientsList", "nutrients");

    let item: Item = serde_json::from_str(data.as_str()).unwrap();
    log!("{:?}", item);
}
