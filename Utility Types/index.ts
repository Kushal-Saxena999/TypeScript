//Utility Types

interface Animal {
  name?: string;
  sound?: string;
  color?: string;
}

// type PartialAnimal = Partial<Animal>;
// type RequiredAnimal = Required<Animal>;
// type ReadonlyAnimal = Readonly<Animal>;
type ReadonlyAnimal = Readonly<Animal>;
type Records = Record<string, any>;//In place of number we can use any

const dog: ReadonlyAnimal = {
  name: "Tommy",
  sound: "Bark",
};

// dog.name = "Timmy";

const record: Records = {
  name: {}
};

type NameOnly = Pick<Animal, "name">;

let cat:NameOnly ={
  name:'sophie'
}

type OmitOnly = Omit<Animal, "name">;
let rabbit: OmitOnly = {
  name: "sophie",
}