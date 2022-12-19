let myMap = new Map([
    ['key1', 'one'],
    ['key2', 'two'],
    ['key3', 'three'],
    ['key4', 'four'],
  ]);
  
  for (let entry of myMap) {
    console.log(`Ключ — ${entry[0]}, значение — ${entry[1]}`);
  }