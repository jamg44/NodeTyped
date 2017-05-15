'use strict';

let mongoose = require('mongoose');
import { Model as _MongooseModel, Document } from 'mongoose';
//import 'reflect-metadata';

interface ISchema {
    model: string;
    fieldDefs: any;
}

const schemas: ISchema[] = [];

export var MongooseModel = _MongooseModel;

export function Model(config?: any) { // this is the decorator factory
    return function (target) { // this is the decorator
        const model = target.name;
        let schemaDef = schemas.find(sc => sc.model === model); // || {}
        const schema = mongoose.Schema(schemaDef.fieldDefs);

        // add static methods
        const staticMethods = Object.getOwnPropertyNames(target)
            .forEach(prop => {
                if (typeof target[prop] === 'function') {
                    console.log('*** statics', prop);
                    schema.statics[prop] = target[prop];
                }
                //return typeof target[prop] === 'function';
            });
        //console.log('static methods', staticMethods); // ["one", "four"]

        // add instance methods
        const instanceMethods = Object.getOwnPropertyNames(target.prototype)
            .forEach(prop => {
                if (prop !== 'constructor') {
                    console.log('*** instace', prop);
                    schema.methods[prop] = target.prototype[prop];
                }
            });

        return mongoose.model('User', schema);
    };
}

export function Column(fieldDef: any) {
    //return Reflect.metadata(formatMetadataKey, formatString);
    return function(target: any, fieldName: string) {
        //console.log('Column', target, target.constructor.name, fieldName, fieldDef);
        //var types = Reflect.getMetadata('design:properties', target, fieldName);
        //console.log(fieldName, 'type', (typeof target).name);
        const model = target.constructor.name;
        let schema = schemas.find(sc => sc.model === model);
        if (!schema) {
            schema = { model, fieldDefs: {}};
            schemas.push(schema);
        }
        schema.fieldDefs[fieldName] = fieldDef;
        //schemaFileds.push({ model, fieldName, fieldDef});
    };
}

// function g() {
//     console.log('g(): evaluated');
//     return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
//         console.log('g(): called');
//         return null;
//     };
// }

/*const logPropertyMetadataKey = Symbol('logProperty');
function logProperty(target: any, key: string) {
    var zz = Reflect.getMetadata(logPropertyMetadataKey, target, key);
    console.log('logProperty', target, key, 'metadata', zz);

  // property value
  var _val = this[key];

  // property getter
  var getter = function () {
    console.log(`Get: ${key} => ${_val}`);
    return _val;
  };

  // property setter
  var setter = function (newVal) {
    console.log(`Set: ${key} => ${newVal}`);
    _val = newVal;
  };

  // Delete property.
  if (delete this[key]) {

    // Create new property with getter and setter
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  }
  
}*/

// function getFormat(target: any, propertyKey: string) {
//     return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
// }
