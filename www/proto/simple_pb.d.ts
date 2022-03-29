// package: rust_wasm_prost.simple
// file: simple.proto

import * as jspb from "google-protobuf";

export class Student extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAge(): number;
  setAge(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  getWeight(): number;
  setWeight(value: number): void;

  clearGradesList(): void;
  getGradesList(): Array<number>;
  setGradesList(value: Array<number>): void;
  addGrades(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Student.AsObject;
  static toObject(includeInstance: boolean, msg: Student): Student.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Student, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Student;
  static deserializeBinaryFromReader(message: Student, reader: jspb.BinaryReader): Student;
}

export namespace Student {
  export type AsObject = {
    name: string,
    age: number,
    height: number,
    weight: number,
    gradesList: Array<number>,
  }
}

