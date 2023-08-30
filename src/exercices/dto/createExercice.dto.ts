import { IsNotEmpty } from 'class-validator';
export class CreateExerciceDto {
  @IsNotEmpty()
  name: string;

  calories: string;

  equipments: string;

  duree: string;

  benefits: string;

  image: string;
}
