function addTwo(num: number) {
  return num + 2;
}

addTwo(5);

// ===================================================================================

function getUpper(value: string) {
  return value.toUpperCase();
}

getUpper('Twinkle');

// ===================================================================================

function signUpUser(name: string, email: string, password: boolean) {}

signUpUser('Twinkle', 'art.twis@gmail.com', true);

// ===================================================================================

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser('h', 'h.com');

// ===================================================================================

function addFive(num: number): number {
  return num + 5;
}

let result = addFive(10);

// ===================================================================================

function getValue(num: number) {
  if (num > 5) {
    return true;
  }

  return '401 Error';
} // we can do that assign multiple type to return value

// ===================================================================================

const getMessage = (s: string): string => {
  return '';
};

// ===================================================================================

const heros = ['thor', 'spiderman', 'ironman'];

heros.map((hero: string): string => {
  return `Hero is ${hero}`;
});

// ===================================================================================

function consoleError(errMsg: string): void {
  console.log(errMsg);
}

// ===================================================================================

function handleError(errMsg: string): never {
  throw new Error(errMsg);
}

export {};
