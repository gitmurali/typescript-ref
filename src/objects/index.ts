type User = {
  Username: string;
  Email: string;
};

const user01 = {} as User;
const user02 = <User>{};

user01.Email = "murali@abc.com";
console.log(user02);

interface IModal {
  content: string;
  form: string;
  href: string;
}

// declaring objects
declare const modal: IModal;

//(or)
const modal1: IModal = {
  content: "",
  form: "",
  href: ""
};

//(or)  just lie to typescript
const modal2 = {} as IModal;

//(or)
class Modal4 implements IModal {
  content!: string;
  form!: string;
  href!: string;
}

const modal5 = new Modal4();
const modal6: Modal4 = new Modal4();
console.log(modal6);
