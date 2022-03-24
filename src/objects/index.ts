type User = {
  Username: string;
  Email: string;
};

const user01 = {} as User;
const user02 = <User>{};

user01.Email = "murali@abc.com";
console.log(user02);
