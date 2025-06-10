const descripter = Object.getOwnPropertyDescriptor(Math, 'PI');

// console.log(descripter);

console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI); // ❌ won't change, because PI is non-writable

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function () {
        console.log('chai nhi baani');
    }
};

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// ✅ Fixed: use Object.defineProperty (not defineProperties) and pass the third arg as object
Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: false
});

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// ❌ Fix: You can't use `for...of` directly on an object.
// ✅ Use `Object.entries` to iterate
for (let [key, value] of Object.entries(chai)) {
    console.log(`${key} : ${value}`);
}