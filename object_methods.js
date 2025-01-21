// object.assign()
let target ={a:1};
let source ={b:2, c:3};
Object.assign(target, source);
console.log(target)
// Object.getOwnPropertyDescriptor()
let obj ={a:1};
let descriptor =Object.getOwnPropertyDescriptor(obj, "a");
console.log(descriptor);

const obj1 ={b:2};
const descriptors =Object.getOwnPropertyDescriptor(obj1, 'b');
console.log(descriptors)

// const obj2 ={b:2};
// const descriptorss =Object.getOwnPropertyDescriptors(obj2, 'b');
// console.log(descriptorss)

// Object.getOwnPropertyDescriptors()
let descript ={a:1, b:2, c:3}
console.log(Object.getOwnPropertyDescriptors(descript))