const a = `{"result": true, "count":42}`
console.log(a);

const obj = JSON.parse(a);
console.log(obj.count);
console.log(obj["result"]);

b = JSON.stringify({x:5, y:6});
console.log(b);