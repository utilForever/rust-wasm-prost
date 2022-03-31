// package: rust_wasm_prost.complex
// file: complex.proto

import * as jspb from "google-protobuf";

export class FruitCondition extends jspb.Message {
  clearBrixList(): void;
  getBrixList(): Array<number>;
  setBrixList(value: Array<number>): void;
  addBrix(value: number, index?: number): number;

  getOrigin(): string;
  setOrigin(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FruitCondition.AsObject;
  static toObject(includeInstance: boolean, msg: FruitCondition): FruitCondition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FruitCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FruitCondition;
  static deserializeBinaryFromReader(message: FruitCondition, reader: jspb.BinaryReader): FruitCondition;
}

export namespace FruitCondition {
  export type AsObject = {
    brixList: Array<number>,
    origin: string,
  }
}

export class VegetableCondition extends jspb.Message {
  clearNutrientsList(): void;
  getNutrientsList(): Array<string>;
  setNutrientsList(value: Array<string>): void;
  addNutrients(value: string, index?: number): string;

  getOrigin(): string;
  setOrigin(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VegetableCondition.AsObject;
  static toObject(includeInstance: boolean, msg: VegetableCondition): VegetableCondition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VegetableCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VegetableCondition;
  static deserializeBinaryFromReader(message: VegetableCondition, reader: jspb.BinaryReader): VegetableCondition;
}

export namespace VegetableCondition {
  export type AsObject = {
    nutrientsList: Array<string>,
    origin: string,
  }
}

export class Item extends jspb.Message {
  getUniqueId(): number;
  setUniqueId(value: number): void;

  hasInformation(): boolean;
  clearInformation(): void;
  getInformation(): Item.Information | undefined;
  setInformation(value?: Item.Information): void;

  hasFruitCondition(): boolean;
  clearFruitCondition(): void;
  getFruitCondition(): FruitCondition | undefined;
  setFruitCondition(value?: FruitCondition): void;

  hasVegetableCondition(): boolean;
  clearVegetableCondition(): void;
  getVegetableCondition(): VegetableCondition | undefined;
  setVegetableCondition(value?: VegetableCondition): void;

  getConditionCase(): Item.ConditionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Item.AsObject;
  static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Item;
  static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
}

export namespace Item {
  export type AsObject = {
    uniqueId: number,
    information?: Item.Information.AsObject,
    fruitCondition?: FruitCondition.AsObject,
    vegetableCondition?: VegetableCondition.AsObject,
  }

  export class Information extends jspb.Message {
    static AsObject: AsObject | undefined;
    getName(): string;
    setName(value: string): void;

    getCount(): number;
    setCount(value: number): void;

    getType(): Item.Information.TypeMap[keyof Item.Information.TypeMap];
    setType(value: Item.Information.TypeMap[keyof Item.Information.TypeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Information.AsObject;
    static toObject(includeInstance: boolean, msg: Information): Information.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Information, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Information;
    static deserializeBinaryFromReader(message: Information, reader: jspb.BinaryReader): Information;
  }

  export namespace Information {
    export type AsObject = {
      name: string,
      count: number,
      type: Item.Information.TypeMap[keyof Item.Information.TypeMap],
    }

    export interface TypeMap {
      FRUIT: 0;
      VEGETABLE: 1;
    }

    export const Type: TypeMap;
  }

  export enum ConditionCase {
    CONDITION_NOT_SET = 0,
    FRUIT_CONDITION = 3,
    VEGETABLE_CONDITION = 4,
  }
}

