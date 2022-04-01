//https://www.typescriptlang.org/play?#code/G4QwTgBCBcEM4BcwEsB2BzCBeCByBAporgNwQD058SamANsoWCHQFCiQBGsAyjRtgioCAdwh8UGABS4QqAPYIAFgUiFiASjKVqkzCOYAHQ6ojzOAKwIBjBK1bX5qOPLoEAdHXnopCAJ4m8gBmUFoUVIh6Dk4ubp7evgEEwRCcYTrmVrb2rASoAK4AthAAwq7yYHAQAN6sEBAASgCiACJYAIwANHUQAOLNTQByWABM3fUAQgAyAKpNWADMrAC+9m4IEGAEACawkbSCZV6VANpHFXDuzS0AutHOrh5ePlvbGvZ5RaXllSM1Pddxn0BoMgdM5is1gQNugtnlDj84CMTu0biRWOtNjt2gjjkiTgAGO6sfwmb54haCADWBD8KVJyRC51+9gZ5IuABZBLV6icAAoQNDsyoLG57fjoSEY6FmSywZlwLk4HmNVqwABEr3VQP6TSGGthBDy2p64KaGs4dHyBBNq3usSeCUNeU6WO27S09se7gQIEtBCkmXeQA

type CatNames = "miffy" | "boris" | "mordred";

type CatList = Record<CatNames, { age: number }>;

const cats: CatList = {
  miffy: { age: 99 },
  boris: { age: 16 },
  mordred: { age: 600 }
};

console.table(cats);
