//@flow
import isPlainObject from 'lodash.isplainobject';

function setAllEffingValues<O, V>(originalObject: O, value: V): O {
  if (!isPlainObject(originalObject)) {
    throw new Error('originalObject is not a plain object.');
  }

  const newObject = { ...originalObject };

  for (const key in newObject) {
    newObject[key] = value;
  }

  return newObject;
}

export default setAllEffingValues;
