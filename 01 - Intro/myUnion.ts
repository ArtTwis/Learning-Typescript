let score: number | string | boolean = 33;
score = '44';

type Admin = {
  adminname: string;
  id: number;
};

type User = {
  username: string;
  id: number;
};

let twinkle: Admin | User = {
  username: 'Twinkle',
  id: 33445,
};

twinkle = {
  adminname: 'Twinkle',
  id: 33445,
};

// ===================================================================================

function getDbId(id: number | string) {
  if (typeof id === 'string') {
    id = id.toLowerCase();
  }

  console.log(`Db id id : ${id}`);
}

getDbId(3);
getDbId('3');

// ===================================================================================

const data1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const data2: string[] = ['1', '2', '3', '4', '5', '6', '7'];

const data3: (string | number)[] = ['1', '2', '3', '4', '5', 7, 8, 9];

// ===================================================================================

let seatAllotment: 'aisle' | 'middle' | 'window';

// ===================================================================================

export {};
