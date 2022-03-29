include!(concat!(env!("OUT_DIR"), "/protobuf.rs"));

extern crate web_sys;

use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;

use crate::rust_wasm_prost::simple::Student;

// A macro to provide 'println!(..)'-style syntax for 'console.log' logging.
#[allow(unused_macros)]
macro_rules! log {
    ( $( $t:tt )* ) => {
        web_sys::console::log_1(&format!( $( $t )* ).into())
    }
}

#[wasm_bindgen]
pub fn convert_proto_ts_to_rust(data: String) {}

#[wasm_bindgen]
pub fn convert_proto_rust_to_ts() {}
