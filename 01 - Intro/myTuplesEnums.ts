const user: (string | number)[] = [1, 'twinkle', 2, 'goyal'];

// If you want to create an array in some Precise way, you can do something like this:
// In the case of Tuples even the order of the elements should matter a lot

let user2: [string, number, boolean];

user2 = ['twinkle', 27, true];

let rgb: [number, number, number] = [255, 234, 213];

type User = [number, string];

const newUser: User = [123, 'example@google.com'];

newUser[1] = 'example@hotmail.com';
