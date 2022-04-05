include!(concat!(env!("OUT_DIR"), "/protobuf.rs"));

extern crate web_sys;

use wasm_bindgen::prelude::*;

use crate::rust_wasm_prost::complex::Item;
use crate::rust_wasm_prost::simple::Student;

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

#[wasm_bindgen]
pub fn convert_raw_bytes_student_ts_to_rust(data: &[u8]) {
    let student: Student = prost::Message::decode(data).expect("failed to decode protobuf binary");
    log!("{:?}", student);
}

#[wasm_bindgen]
pub fn convert_raw_bytes_student_rust_to_ts() -> Vec<u8> {
    let student = Student {
        name: "John".to_string(),
        age: 20,
        height: 182.4,
        weight: 76.2,
        grades: vec![88, 75, 92],
    };

    prost::Message::encode_to_vec(&student)
}

#[wasm_bindgen]
pub fn convert_proto_item_rust_to_ts1() -> String {
    let item = Item {
        unique_id: 201,
        information: Some(crate::rust_wasm_prost::complex::item::Information {
            name: "Banana".to_string(),
            count: 4,
            r#type: crate::rust_wasm_prost::complex::item::information::Type::Fruit as i32,
        }),
        condition: Some(
            crate::rust_wasm_prost::complex::item::Condition::FruitCondition(
                crate::rust_wasm_prost::complex::FruitCondition {
                    brix: vec![8.8, 7.2, 9.1, 8.4],
                    origin: "Brazil".to_string(),
                },
            ),
        ),
    };

    serde_json::to_string(&item).unwrap()
}

#[wasm_bindgen]
pub fn convert_proto_item_rust_to_ts2() -> String {
    let item = Item {
        unique_id: 202,
        information: Some(crate::rust_wasm_prost::complex::item::Information {
            name: "Potato".to_string(),
            count: 1,
            r#type: crate::rust_wasm_prost::complex::item::information::Type::Vegetable as i32,
        }),
        condition: Some(
            crate::rust_wasm_prost::complex::item::Condition::VegetableCondition(
                crate::rust_wasm_prost::complex::VegetableCondition {
                    nutrients: vec!["Vitamin A".to_string(), "Vitamin D".to_string()],
                    origin: "China".to_string(),
                },
            ),
        ),
    };

    serde_json::to_string(&item).unwrap()
}
