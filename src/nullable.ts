type Nullable<T> = T | null;

interface Employee {
  id: number;
  name: string;
  salary: Nullable<number>;
}
