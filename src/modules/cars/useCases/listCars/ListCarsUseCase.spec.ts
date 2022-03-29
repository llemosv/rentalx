import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListCarsUseCase } from "./ListCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
describe("List car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });
  it("should be able to list all available cars.", async () => {
    await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Car description",
      daily_rate: 100,
      license_plate: "SED-2022",
      fine_amount: 50,
      brand: "car brand",
      category_id: "category id",
    });

    const cars = await listCarsUseCase.execute();

    console.log(cars);
  });
});
