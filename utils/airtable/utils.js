import camelCase from 'lodash.camelcase';
import isObject from 'lodash.isobject';

export const getTableName = (record) => record._table.name;

// Quack
export const isRecord = (maybeRecord) =>
  isObject(maybeRecord) && maybeRecord._rawJson;

export const recordToObject = (record) =>
  Object.keys(record.fields).reduce((fields, key) => {
    const value = record.get(key);
    let converted = isRecord(value) ? recordToObject(value) : value;
    if (Array.isArray(value) && isRecord(value[0])) {
      converted = value.map(recordToObject);
    }
    return {
      ...fields,
      [camelCase(key)]: converted,
    };
  }, {});
