import * as wasm from "rust-wasm-prost";
import { Student } from './proto/simple_pb';
import { FruitCondition, Item, VegetableCondition } from './proto/complex_pb';

export function example_using_byte_stream() {
    let student = new Student();
    student.setName("Chris");
    student.setAge(34);
    student.setHeight(175.0);
    student.setWeight(80.0);
    student.setGradesList([100, 90, 85]);

    let student1_bytes = student.serializeBinary();
    wasm.convert_raw_bytes_student_ts_to_rust(student1_bytes);

    let student2_bytes = wasm.convert_raw_bytes_student_rust_to_ts();
    let student2 = Student.deserializeBinary(student2_bytes);
    console.log(student2);

    let information1 = new Item.Information();
    information1.setName("Apple");
    information1.setCount(3);
    information1.setType(Item.Information.Type.FRUIT);

    let fruitCondition1 = new FruitCondition();
    fruitCondition1.setBrixList([12.9, 10.4, 11.3]);
    fruitCondition1.setOrigin("Korea");

    let item1 = new Item();
    item1.setUniqueId(100);
    item1.setInformation(information1);
    item1.setFruitCondition(fruitCondition1);

    let item1_bytes = item1.serializeBinary();
    wasm.convert_raw_bytes_item_ts_to_rust(item1_bytes);

    let information2 = new Item.Information();
    information2.setName("Onion");
    information2.setCount(5);
    information2.setType(Item.Information.Type.VEGETABLE);

    let vetetableCondition2 = new VegetableCondition();
    vetetableCondition2.setNutrientsList(["Vitamin B", "Vitamin C"]);
    vetetableCondition2.setOrigin("Korea");

    let item2 = new Item();
    item2.setUniqueId(101);
    item2.setInformation(information2);
    item2.setVegetableCondition(vetetableCondition2);

    let item2_bytes = item2.serializeBinary();
    wasm.convert_raw_bytes_item_ts_to_rust(item2_bytes);

    let item3_bytes = wasm.convert_raw_bytes_item_rust_to_ts1();
    let item3 = Item.deserializeBinary(item3_bytes);
    console.log(item3);

    let item4_bytes = wasm.convert_raw_bytes_item_rust_to_ts2();
    let item4 = Item.deserializeBinary(item4_bytes);
    console.log(item4);
}
