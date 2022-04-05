import * as wasm from "rust-wasm-prost";
import { Student } from './proto/simple_pb';
import { FruitCondition, Item, VegetableCondition } from './proto/complex_pb';

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

let student4 = new Student();
student4.setName("Chris");
student4.setAge(34);
student4.setHeight(175.0);
student4.setWeight(80.0);
student4.setGradesList([100, 90, 85]);

let student4_bytes = student4.serializeBinary();
wasm.convert_raw_bytes_student_ts_to_rust(student4_bytes);

let student5_bytes = wasm.convert_raw_bytes_student_rust_to_ts();
let student5 = Student.deserializeBinary(student5_bytes);
console.log(student5);

let information7 = new Item.Information();
information7.setName("Apple");
information7.setCount(3);
information7.setType(Item.Information.Type.FRUIT);

let fruitCondition7 = new FruitCondition();
fruitCondition7.setBrixList([12.9, 10.4, 11.3]);
fruitCondition7.setOrigin("Korea");

let item7 = new Item();
item7.setUniqueId(100);
item7.setInformation(information7);
item7.setFruitCondition(fruitCondition7);

let item7_bytes = item7.serializeBinary();
wasm.convert_raw_bytes_item_ts_to_rust(item7_bytes);

let information8 = new Item.Information();
information8.setName("Onion");
information8.setCount(5);
information8.setType(Item.Information.Type.VEGETABLE);

let vetetableCondition8 = new VegetableCondition();
vetetableCondition8.setNutrientsList(["Vitamin B", "Vitamin C"]);
vetetableCondition8.setOrigin("Korea");

let item8 = new Item();
item8.setUniqueId(101);
item8.setInformation(information8);
item8.setVegetableCondition(vetetableCondition8);

let item8_bytes = item8.serializeBinary();
wasm.convert_raw_bytes_item_ts_to_rust(item8_bytes);
