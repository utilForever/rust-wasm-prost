import * as wasm from "rust-wasm-prost";
import { Student } from './proto/simple_pb';
import { FruitCondition, Item, VegetableCondition } from './proto/complex_pb';

export function example_using_json() {
    let student: Student.AsObject = {
        name: "Chris",
        age: 34,
        height: 175.0,
        weight: 80.0,
        gradesList: [100, 90, 85],
    };

    let student1_json = JSON.stringify(student);
    wasm.convert_proto_student_ts_to_rust(student1_json);

    let student2_json = wasm.convert_proto_student_rust_to_ts();
    let student2: Student.AsObject = JSON.parse(student2_json);
    console.log(student2);

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

    let item1_json = JSON.stringify(item1);
    wasm.convert_proto_item_ts_to_rust(item1_json);

    let item2_json = JSON.stringify(item2);
    wasm.convert_proto_item_ts_to_rust(item2_json);

    let item3_json = wasm.convert_proto_item_rust_to_ts1();
    let item3: Item.AsObject = JSON.parse(item3_json);
    console.log(item3);

    let item4_json = wasm.convert_proto_item_rust_to_ts2();
    let item4: Item.AsObject = JSON.parse(item4_json);
    console.log(item4);
}
