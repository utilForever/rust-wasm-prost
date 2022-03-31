// source: complex.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.rust_wasm_prost.complex.FruitCondition', null, global);
goog.exportSymbol('proto.rust_wasm_prost.complex.Item', null, global);
goog.exportSymbol('proto.rust_wasm_prost.complex.Item.ConditionCase', null, global);
goog.exportSymbol('proto.rust_wasm_prost.complex.Item.Information', null, global);
goog.exportSymbol('proto.rust_wasm_prost.complex.Item.Information.Type', null, global);
goog.exportSymbol('proto.rust_wasm_prost.complex.VegetableCondition', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rust_wasm_prost.complex.FruitCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rust_wasm_prost.complex.FruitCondition.repeatedFields_, null);
};
goog.inherits(proto.rust_wasm_prost.complex.FruitCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rust_wasm_prost.complex.FruitCondition.displayName = 'proto.rust_wasm_prost.complex.FruitCondition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rust_wasm_prost.complex.VegetableCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rust_wasm_prost.complex.VegetableCondition.repeatedFields_, null);
};
goog.inherits(proto.rust_wasm_prost.complex.VegetableCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rust_wasm_prost.complex.VegetableCondition.displayName = 'proto.rust_wasm_prost.complex.VegetableCondition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rust_wasm_prost.complex.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rust_wasm_prost.complex.Item.oneofGroups_);
};
goog.inherits(proto.rust_wasm_prost.complex.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rust_wasm_prost.complex.Item.displayName = 'proto.rust_wasm_prost.complex.Item';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rust_wasm_prost.complex.Item.Information = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rust_wasm_prost.complex.Item.Information, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rust_wasm_prost.complex.Item.Information.displayName = 'proto.rust_wasm_prost.complex.Item.Information';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rust_wasm_prost.complex.FruitCondition.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rust_wasm_prost.complex.FruitCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.rust_wasm_prost.complex.FruitCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rust_wasm_prost.complex.FruitCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rust_wasm_prost.complex.FruitCondition.toObject = function(includeInstance, msg) {
  var f, obj = {
    brixList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 1)) == null ? undefined : f,
    origin: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rust_wasm_prost.complex.FruitCondition}
 */
proto.rust_wasm_prost.complex.FruitCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rust_wasm_prost.complex.FruitCondition;
  return proto.rust_wasm_prost.complex.FruitCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rust_wasm_prost.complex.FruitCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rust_wasm_prost.complex.FruitCondition}
 */
proto.rust_wasm_prost.complex.FruitCondition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addBrix(values[i]);
      }
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrigin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rust_wasm_prost.complex.FruitCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rust_wasm_prost.complex.FruitCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rust_wasm_prost.complex.FruitCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rust_wasm_prost.complex.FruitCondition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBrixList();
  if (f.length > 0) {
    writer.writePackedFloat(
      1,
      f
    );
  }
  f = message.getOrigin();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated float brix = 1;
 * @return {!Array<number>}
 */
proto.rust_wasm_prost.complex.FruitCondition.prototype.getBrixList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.rust_wasm_prost.complex.FruitCondition} returns this
 */
proto.rust_wasm_prost.complex.FruitCondition.prototype.setBrixList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.rust_wasm_prost.complex.FruitCondition} returns this
 */
proto.rust_wasm_prost.complex.FruitCondition.prototype.addBrix = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rust_wasm_prost.complex.FruitCondition} returns this
 */
proto.rust_wasm_prost.complex.FruitCondition.prototype.clearBrixList = function() {
  return this.setBrixList([]);
};


/**
 * optional string origin = 2;
 * @return {string}
 */
proto.rust_wasm_prost.complex.FruitCondition.prototype.getOrigin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rust_wasm_prost.complex.FruitCondition} returns this
 */
proto.rust_wasm_prost.complex.FruitCondition.prototype.setOrigin = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rust_wasm_prost.complex.VegetableCondition.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rust_wasm_prost.complex.VegetableCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.rust_wasm_prost.complex.VegetableCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rust_wasm_prost.complex.VegetableCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rust_wasm_prost.complex.VegetableCondition.toObject = function(includeInstance, msg) {
  var f, obj = {
    nutrientsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    origin: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rust_wasm_prost.complex.VegetableCondition}
 */
proto.rust_wasm_prost.complex.VegetableCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rust_wasm_prost.complex.VegetableCondition;
  return proto.rust_wasm_prost.complex.VegetableCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rust_wasm_prost.complex.VegetableCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rust_wasm_prost.complex.VegetableCondition}
 */
proto.rust_wasm_prost.complex.VegetableCondition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addNutrients(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrigin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rust_wasm_prost.complex.VegetableCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rust_wasm_prost.complex.VegetableCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rust_wasm_prost.complex.VegetableCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rust_wasm_prost.complex.VegetableCondition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNutrientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getOrigin();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated string nutrients = 1;
 * @return {!Array<string>}
 */
proto.rust_wasm_prost.complex.VegetableCondition.prototype.getNutrientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.rust_wasm_prost.complex.VegetableCondition} returns this
 */
proto.rust_wasm_prost.complex.VegetableCondition.prototype.setNutrientsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.rust_wasm_prost.complex.VegetableCondition} returns this
 */
proto.rust_wasm_prost.complex.VegetableCondition.prototype.addNutrients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rust_wasm_prost.complex.VegetableCondition} returns this
 */
proto.rust_wasm_prost.complex.VegetableCondition.prototype.clearNutrientsList = function() {
  return this.setNutrientsList([]);
};


/**
 * optional string origin = 2;
 * @return {string}
 */
proto.rust_wasm_prost.complex.VegetableCondition.prototype.getOrigin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rust_wasm_prost.complex.VegetableCondition} returns this
 */
proto.rust_wasm_prost.complex.VegetableCondition.prototype.setOrigin = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rust_wasm_prost.complex.Item.oneofGroups_ = [[3,4]];

/**
 * @enum {number}
 */
proto.rust_wasm_prost.complex.Item.ConditionCase = {
  CONDITION_NOT_SET: 0,
  FRUIT_CONDITION: 3,
  VEGETABLE_CONDITION: 4
};

/**
 * @return {proto.rust_wasm_prost.complex.Item.ConditionCase}
 */
proto.rust_wasm_prost.complex.Item.prototype.getConditionCase = function() {
  return /** @type {proto.rust_wasm_prost.complex.Item.ConditionCase} */(jspb.Message.computeOneofCase(this, proto.rust_wasm_prost.complex.Item.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rust_wasm_prost.complex.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.rust_wasm_prost.complex.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rust_wasm_prost.complex.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rust_wasm_prost.complex.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    uniqueId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    information: (f = msg.getInformation()) && proto.rust_wasm_prost.complex.Item.Information.toObject(includeInstance, f),
    fruitCondition: (f = msg.getFruitCondition()) && proto.rust_wasm_prost.complex.FruitCondition.toObject(includeInstance, f),
    vegetableCondition: (f = msg.getVegetableCondition()) && proto.rust_wasm_prost.complex.VegetableCondition.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rust_wasm_prost.complex.Item}
 */
proto.rust_wasm_prost.complex.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rust_wasm_prost.complex.Item;
  return proto.rust_wasm_prost.complex.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rust_wasm_prost.complex.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rust_wasm_prost.complex.Item}
 */
proto.rust_wasm_prost.complex.Item.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUniqueId(value);
      break;
    case 2:
      var value = new proto.rust_wasm_prost.complex.Item.Information;
      reader.readMessage(value,proto.rust_wasm_prost.complex.Item.Information.deserializeBinaryFromReader);
      msg.setInformation(value);
      break;
    case 3:
      var value = new proto.rust_wasm_prost.complex.FruitCondition;
      reader.readMessage(value,proto.rust_wasm_prost.complex.FruitCondition.deserializeBinaryFromReader);
      msg.setFruitCondition(value);
      break;
    case 4:
      var value = new proto.rust_wasm_prost.complex.VegetableCondition;
      reader.readMessage(value,proto.rust_wasm_prost.complex.VegetableCondition.deserializeBinaryFromReader);
      msg.setVegetableCondition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rust_wasm_prost.complex.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rust_wasm_prost.complex.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rust_wasm_prost.complex.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rust_wasm_prost.complex.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUniqueId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getInformation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rust_wasm_prost.complex.Item.Information.serializeBinaryToWriter
    );
  }
  f = message.getFruitCondition();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rust_wasm_prost.complex.FruitCondition.serializeBinaryToWriter
    );
  }
  f = message.getVegetableCondition();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rust_wasm_prost.complex.VegetableCondition.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rust_wasm_prost.complex.Item.Information.prototype.toObject = function(opt_includeInstance) {
  return proto.rust_wasm_prost.complex.Item.Information.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rust_wasm_prost.complex.Item.Information} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rust_wasm_prost.complex.Item.Information.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    count: jspb.Message.getFieldWithDefault(msg, 2, 0),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rust_wasm_prost.complex.Item.Information}
 */
proto.rust_wasm_prost.complex.Item.Information.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rust_wasm_prost.complex.Item.Information;
  return proto.rust_wasm_prost.complex.Item.Information.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rust_wasm_prost.complex.Item.Information} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rust_wasm_prost.complex.Item.Information}
 */
proto.rust_wasm_prost.complex.Item.Information.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    case 3:
      var value = /** @type {!proto.rust_wasm_prost.complex.Item.Information.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rust_wasm_prost.complex.Item.Information.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rust_wasm_prost.complex.Item.Information.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rust_wasm_prost.complex.Item.Information} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rust_wasm_prost.complex.Item.Information.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.rust_wasm_prost.complex.Item.Information.Type = {
  FRUIT: 0,
  VEGETABLE: 1
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.rust_wasm_prost.complex.Item.Information.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rust_wasm_prost.complex.Item.Information} returns this
 */
proto.rust_wasm_prost.complex.Item.Information.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 count = 2;
 * @return {number}
 */
proto.rust_wasm_prost.complex.Item.Information.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rust_wasm_prost.complex.Item.Information} returns this
 */
proto.rust_wasm_prost.complex.Item.Information.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Type type = 3;
 * @return {!proto.rust_wasm_prost.complex.Item.Information.Type}
 */
proto.rust_wasm_prost.complex.Item.Information.prototype.getType = function() {
  return /** @type {!proto.rust_wasm_prost.complex.Item.Information.Type} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.rust_wasm_prost.complex.Item.Information.Type} value
 * @return {!proto.rust_wasm_prost.complex.Item.Information} returns this
 */
proto.rust_wasm_prost.complex.Item.Information.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int32 unique_id = 1;
 * @return {number}
 */
proto.rust_wasm_prost.complex.Item.prototype.getUniqueId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rust_wasm_prost.complex.Item} returns this
 */
proto.rust_wasm_prost.complex.Item.prototype.setUniqueId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Information information = 2;
 * @return {?proto.rust_wasm_prost.complex.Item.Information}
 */
proto.rust_wasm_prost.complex.Item.prototype.getInformation = function() {
  return /** @type{?proto.rust_wasm_prost.complex.Item.Information} */ (
    jspb.Message.getWrapperField(this, proto.rust_wasm_prost.complex.Item.Information, 2));
};


/**
 * @param {?proto.rust_wasm_prost.complex.Item.Information|undefined} value
 * @return {!proto.rust_wasm_prost.complex.Item} returns this
*/
proto.rust_wasm_prost.complex.Item.prototype.setInformation = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rust_wasm_prost.complex.Item} returns this
 */
proto.rust_wasm_prost.complex.Item.prototype.clearInformation = function() {
  return this.setInformation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rust_wasm_prost.complex.Item.prototype.hasInformation = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FruitCondition fruit_condition = 3;
 * @return {?proto.rust_wasm_prost.complex.FruitCondition}
 */
proto.rust_wasm_prost.complex.Item.prototype.getFruitCondition = function() {
  return /** @type{?proto.rust_wasm_prost.complex.FruitCondition} */ (
    jspb.Message.getWrapperField(this, proto.rust_wasm_prost.complex.FruitCondition, 3));
};


/**
 * @param {?proto.rust_wasm_prost.complex.FruitCondition|undefined} value
 * @return {!proto.rust_wasm_prost.complex.Item} returns this
*/
proto.rust_wasm_prost.complex.Item.prototype.setFruitCondition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rust_wasm_prost.complex.Item.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rust_wasm_prost.complex.Item} returns this
 */
proto.rust_wasm_prost.complex.Item.prototype.clearFruitCondition = function() {
  return this.setFruitCondition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rust_wasm_prost.complex.Item.prototype.hasFruitCondition = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional VegetableCondition vegetable_condition = 4;
 * @return {?proto.rust_wasm_prost.complex.VegetableCondition}
 */
proto.rust_wasm_prost.complex.Item.prototype.getVegetableCondition = function() {
  return /** @type{?proto.rust_wasm_prost.complex.VegetableCondition} */ (
    jspb.Message.getWrapperField(this, proto.rust_wasm_prost.complex.VegetableCondition, 4));
};


/**
 * @param {?proto.rust_wasm_prost.complex.VegetableCondition|undefined} value
 * @return {!proto.rust_wasm_prost.complex.Item} returns this
*/
proto.rust_wasm_prost.complex.Item.prototype.setVegetableCondition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.rust_wasm_prost.complex.Item.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rust_wasm_prost.complex.Item} returns this
 */
proto.rust_wasm_prost.complex.Item.prototype.clearVegetableCondition = function() {
  return this.setVegetableCondition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rust_wasm_prost.complex.Item.prototype.hasVegetableCondition = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.rust_wasm_prost.complex);
