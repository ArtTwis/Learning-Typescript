var user = {
    name: 'Twinkle',
    email: 'art.twis@gmail.com',
    isActive: true
};
// ===================================================================================
function createUser(_a) {
    var string = _a.name, boolean = _a.isActive;
}
// createUser({ name: 'Twinkle', isActive: false, email: 'art.twis@gmail.com' }); error: function only accept as an argument an object with the following properties name and isActive
var newUser = { name: 'Twinkle', isActive: false, email: 'art.twis@gmail.com' };
createUser(newUser);
// ===================================================================================
function createCourse() {
    return { name: 'ReactJS', price: 399 };
}
function createNewUser(user) {
    return { name: '', email: '', isActive: true };
}
createNewUser({ name: '', email: '', isActive: false });
var myUser = {
    _id: '1234',
    name: 'T',
    email: 't@t.com',
    age: 27,
    isActive: false
};
