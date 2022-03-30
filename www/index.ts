import * as wasm from "rust-wasm-prost";
import { Student } from './proto/simple_pb';

let student1: Student.AsObject = {
    name: "Chris",
    age: 34,
    height: 175.0,
    weight: 80.0,
    gradesList: [100, 90, 85],
};

let data = JSON.stringify(student1);
console.log(data);

wasm.convert_proto_ts_to_rust(data);

let student2 = wasm.convert_proto_rust_to_ts();
console.log(student2);

let student3: Student.AsObject = JSON.parse(student2);
console.log(student3);
