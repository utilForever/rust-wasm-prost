import * as wasm from "rust-wasm-prost";
import { Student } from './proto/simple_pb';

let student: Student.AsObject = {
    name: "Chris",
    age: 34,
    height: 175.0,
    weight: 80.0,
    gradesList: [100, 90, 85],
};

let data = JSON.stringify(student);
console.log(data);

wasm.convert_proto_ts_to_rust(data);
