type CatNames = "miffy" | "boris" | "mordred";

type CatList = Record<CatNames, { age: number }>;

const cats: CatList = {
  miffy: { age: 99 },
  boris: { age: 16 },
  mordred: { age: 600 }
};

console.table(cats);
