import * as wasm from "rust-wasm-prost";
import { Student } from './proto/simple_pb';
import { Item } from './proto/complex_pb';

let student1: Student.AsObject = {
    name: "Chris",
    age: 34,
    height: 175.0,
    weight: 80.0,
    gradesList: [100, 90, 85],
};

let data_student = JSON.stringify(student1);
console.log(data_student);

wasm.convert_proto_student_ts_to_rust(data_student);

let student2 = wasm.convert_proto_student_rust_to_ts();
console.log(student2);

let student3: Student.AsObject = JSON.parse(student2);
console.log(student3);

let item1: Item.AsObject = {
    uniqueId: 100,
    information: {
        name: "Apple",
        count: 3,
        type: Item.Information.Type.FRUIT,
    },
    fruitCondition: {
        brixList: [12.9, 10.4, 11.3],
        origin: "Korea",
    },
};

let item2: Item.AsObject = {
    uniqueId: 101,
    information: {
        name: "Onion",
        count: 5,
        type: Item.Information.Type.VEGETABLE,
    },
    vegetableCondition: {
        nutrientsList: ["Vitamin B", "Vitamin C"],
        origin: "Korea",
    },
};

let data_item1 = JSON.stringify(item1);
console.log(data_item1);

wasm.convert_proto_item_ts_to_rust(data_item1);

let data_item2 = JSON.stringify(item2);
console.log(data_item2);

wasm.convert_proto_item_ts_to_rust(data_item2);

let item3 = wasm.convert_proto_item_rust_to_ts1();
console.log(item3);

let item4: Item.AsObject = JSON.parse(item3);
console.log(item4);

let item5 = wasm.convert_proto_item_rust_to_ts2();
console.log(item5);

let item6: Item.AsObject = JSON.parse(item5);
console.log(item6);
