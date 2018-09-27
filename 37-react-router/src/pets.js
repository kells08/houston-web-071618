const allPets = [
  {
    id: "5c142d9e-ea45-4231-8146-cccf71c704c0",
    type: "dog",
    sex: "male",
    age: 4,
    weight: 1,
    name: "Trident",
    isAdopted: false
  },
  {
    id: "2c902312-dfa3-446f-8b4b-5e115170d807",
    type: "cat",
    sex: "male",
    age: 3,
    weight: 1,
    name: "Teddy",
    isAdopted: false
  },
  {
    id: "6057de4f-6725-4b9f-a0b1-1f3bd3ad04a6",
    type: "cat",
    sex: "male",
    age: 2,
    weight: 5,
    name: "Hemingway",
    isAdopted: false
  },
  {
    id: "a7c8b608-0d39-401b-a693-1bc882f21425",
    type: "dog",
    sex: "male",
    age: 1,
    weight: 1,
    name: "Paws",
    isAdopted: false
  },
  {
    id: "0ad23cf0-6ea5-432c-bb48-8556a5c1a484",
    type: "dog",
    sex: "female",
    age: 6,
    weight: 3,
    name: "Silent",
    isAdopted: false
  },
  {
    id: "ffc4663d-71f3-4ad9-8242-973756c8b8b1",
    type: "dog",
    sex: "female",
    age: 10,
    weight: 5,
    name: "Wisdom",
    isAdopted: false
  },
  {
    id: "9750e959-f8ef-465f-9e13-16323454dc1f",
    type: "micropig",
    sex: "male",
    age: 4,
    weight: 5,
    name: "Hemingway",
    isAdopted: false
  },
  {
    id: "24064151-0d34-4b9e-ba29-d4289bda8fe6",
    type: "micropig",
    sex: "male",
    age: 9,
    weight: 4,
    name: "Radar",
    isAdopted: false
  },
  {
    id: "18854fc7-00c9-4d6a-b3c6-bfd9a06ce1e7",
    type: "dog",
    sex: "male",
    age: 6,
    weight: 2,
    name: "Teddy",
    isAdopted: false
  },
  {
    id: "016b0d4a-1d80-45df-824e-f4ff06b07532",
    type: "dog",
    sex: "male",
    age: 5,
    weight: 6,
    name: "Olson",
    isAdopted: false
  },
  {
    id: "5ed05348-77ed-4f50-82fc-a004e13f496f",
    type: "cat",
    sex: "male",
    age: 6,
    weight: 2,
    name: "Max",
    isAdopted: false
  },
  {
    id: "20f15086-7952-4ead-bee4-bd8d8f990738",
    type: "cat",
    sex: "male",
    age: 5,
    weight: 1,
    name: "Strike",
    isAdopted: false
  },
  {
    id: "1b44f0ee-1957-471b-b474-92650053995c",
    type: "cat",
    sex: "male",
    age: 8,
    weight: 4,
    name: "Sprout",
    isAdopted: false
  },
  {
    id: "1a56b25a-008f-4c00-bdb7-9302ca608964",
    type: "dog",
    sex: "male",
    age: 6,
    weight: 5,
    name: "Sprout",
    isAdopted: false
  },
  {
    id: "5f0ca9bc-5454-4ff5-a7d7-2c8d0a0f1583",
    type: "dog",
    sex: "male",
    age: 1,
    weight: 3,
    name: "Teasle",
    isAdopted: false
  },
  {
    id: "a0afc449-6705-4c7e-8b96-efcfc997dc86",
    type: "dog",
    sex: "female",
    age: 5,
    weight: 1,
    name: "Mickey",
    isAdopted: false
  },
  {
    id: "cf8c0815-ec1a-41a2-806b-5df40c0fff99",
    type: "dog",
    sex: "female",
    age: 9,
    weight: 6,
    name: "Silent",
    isAdopted: false
  },
  {
    id: "354c61e0-d3cb-4163-8132-877a1a4198c6",
    type: "micropig",
    sex: "female",
    age: 6,
    weight: 5,
    name: "Ivy",
    isAdopted: false
  },
  {
    id: "103bf0d9-00a3-41d4-b980-a2f3518a6b15",
    type: "dog",
    sex: "female",
    age: 8,
    weight: 3,
    name: "Gin",
    isAdopted: false
  },
  {
    id: "f6890e01-410b-4676-8346-e5d7fe147330",
    type: "dog",
    sex: "male",
    age: 8,
    weight: 3,
    name: "Spiral",
    isAdopted: false
  },
  {
    id: "9e7cc723-d7f5-440d-8ead-c311e68014ee",
    type: "dog",
    sex: "male",
    age: 8,
    weight: 6,
    name: "Kennedy",
    isAdopted: false
  },
  {
    id: "6eaecf43-a54c-435d-a1eb-b4e7195b6a1d",
    type: "dog",
    sex: "female",
    age: 1,
    weight: 1,
    name: "Feta",
    isAdopted: false
  },
  {
    id: "86520b4b-7849-4462-b511-cddc7f416ad6",
    type: "cat",
    sex: "female",
    age: 7,
    weight: 6,
    name: "Cuddles",
    isAdopted: false
  },
  {
    id: "f2874129-1524-4423-b7bd-2654a3a4147e",
    type: "cat",
    sex: "male",
    age: 5,
    weight: 1,
    name: "Radar",
    isAdopted: false
  },
  {
    id: "a7ea570c-275f-4a4d-aa71-fdd1f72a2c02",
    type: "cat",
    sex: "female",
    age: 10,
    weight: 5,
    name: "Babs",
    isAdopted: false
  },
  {
    id: "77a12fc4-887f-4940-9670-8d216e6b653d",
    type: "dog",
    sex: "female",
    age: 10,
    weight: 2,
    name: "Maia",
    isAdopted: false
  },
  {
    id: "017ed6fe-cf97-4fe1-b92e-f6475b247ff5",
    type: "dog",
    sex: "male",
    age: 9,
    weight: 5,
    name: "Cupid",
    isAdopted: false
  },
  {
    id: "b29ee288-2c10-4c94-ab7b-e53c61b4990a",
    type: "dog",
    sex: "male",
    age: 2,
    weight: 4,
    name: "Clue",
    isAdopted: false
  },
  {
    id: "22f3520d-573f-407b-878b-283e8421db4e",
    type: "dog",
    sex: "female",
    age: 4,
    weight: 3,
    name: "Dori",
    isAdopted: false
  },
  {
    id: "2940aa06-6e1f-4dfe-a6bc-9a2517547cc3",
    type: "dog",
    sex: "male",
    age: 5,
    weight: 3,
    name: "Cupid",
    isAdopted: false
  },
  {
    id: "3c44545b-94b0-4eff-a960-7805f9677799",
    type: "dog",
    sex: "female",
    age: 10,
    weight: 4,
    name: "Ham",
    isAdopted: false
  },
  {
    id: "bf60344b-8674-451b-b39a-df59e54986e6",
    type: "dog",
    sex: "male",
    age: 7,
    weight: 5,
    name: "Teddy",
    isAdopted: false
  },
  {
    id: "4619fb66-c3da-4ae6-8ed3-894a3dce37d9",
    type: "micropig",
    sex: "male",
    age: 2,
    weight: 5,
    name: "Grim",
    isAdopted: false
  },
  {
    id: "f20db164-e63e-45e9-80df-d687988e1f09",
    type: "cat",
    sex: "female",
    age: 4,
    weight: 4,
    name: "Flurry",
    isAdopted: false
  },
  {
    id: "6c8e937e-3104-4ceb-a3c7-8cdd6ee90082",
    type: "dog",
    sex: "female",
    age: 3,
    weight: 2,
    name: "Hennessy",
    isAdopted: false
  }
];

// export default true;

export const getAll = () => allPets;

export const getByType = type => allPets.filter(pet => pet.type === type);

export const getBetweenAge = (from, to) =>
  allPets.filter(pet => pet.age >= from && pet.age <= to);
