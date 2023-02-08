interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  google_id?: string;
  //   startTrail: () => string;
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

interface User {
  githubToken?: string;
}

interface Admin extends User {
  role: 'admin' | 'ta' | 'learner';
}

const twinkle: User = {
  dbId: 221222,
  email: 't@t.com',
  userId: 22112,
  githubToken: 'tg2345',
  startTrail: () => {
    return 'Trail started';
  },
  getCoupon: (name: 'twinkle10', off: 30) => {
    return 10;
  },
};

twinkle.email = 't@tt.com';
// twinkle.dbId = 332315;
