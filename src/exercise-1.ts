class Book {
  constructor(public author: string, public title: string) {}
}
class Movie {
  constructor(public director: string) {}
}
class Song {
  constructor(public artist: string) {}
}

interface EntityMap {
  book: Book;
  movie: Movie;
  song: Song;
}

class Store {
  get<k extends keyof EntityMap>(kind: k, id: string): EntityMap[k] {}
  getAll<k extends keyof EntityMap>(kind: k): EntityMap[k][] {}
  create<k extends keyof EntityMap>(kind: k, toCreate: EntityMap[k]): void {}
  update<k extends keyof EntityMap>(
    kind: k,
    id: string,
    props: Partial<EntityMap[k]>
  ) {}
}

const myBook = new Book("Murali");
const store = new Store();
store.get("book", "123"); //Book
store.getAll("book"); // Book[]
store.create("book", {
  author: "Murali",
  title: "how to build anything from scratch"
});
store.update("book", "123", { author: "" });
