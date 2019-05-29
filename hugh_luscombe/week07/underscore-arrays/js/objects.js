var objectToMap = {
  start:  100,
  middle: 853,
  end:    912
}


const multiple = _.mapObject(objectToMap, function(val, key) {
  return val * _.random(0, 100);
});
console.log( multiple );

const pairs = _.pairs(objectToMap)
console.log( pairs );

const invert = _.invert(objectToMap)
console.log( invert );

console.log( _.omit( objectToMap, 'start' ) );
console.log( _.pick( objectToMap, 'middle', 'end' ) );
