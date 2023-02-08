const user = {
  name: 'Twinkle',
  email: 'art.twis@gmail.com',
  isActive: true,
};

// ===================================================================================

function createUser({ name: string, isActive: boolean }) {}

// createUser({ name: 'Twinkle', isActive: false, email: 'art.twis@gmail.com' }); error: function only accept as an argument an object with the following properties name and isActive

let newUser = { name: 'Twinkle', isActive: false, email: 'art.twis@gmail.com' };

createUser(newUser);

// ===================================================================================

function createCourse(): { name: string; price: number } {
  return { name: 'ReactJS', price: 399 };
}

// ===================================================================================

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createNewUser(user: User): User {
  return { name: '', email: '', isActive: true };
}

createNewUser({ name: '', email: '', isActive: false });

// ===================================================================================

type User1 = {
  readonly _id: string;
  name: string;
  age: number;
  email: string;
  isActive: boolean;
  creditCardNum?: number;
};

let myUser: User1 = {
  _id: '1234',
  name: 'T',
  email: 't@t.com',
  age: 27,
  isActive: false,
};

// ===================================================================================

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  carddate: string;
};

type cardDetails = cardNumber & cardDate & { cardcvv: number };

// ===================================================================================
