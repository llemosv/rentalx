import { ICreateCarDTO } from "@modules/cars/dto/ICreateCarDTO";

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<void>;
}
export { ICarsRepository };
