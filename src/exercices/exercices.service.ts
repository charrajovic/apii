import { Injectable } from '@nestjs/common';
import { Exercice } from './exercices.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ExercicesRepository } from './exercices.repository';
import { CreateExerciceDto } from './dto/createExercice.dto';

@Injectable()
export class ExercicesService {
  constructor(
    @InjectRepository(ExercicesRepository)
    private exercicesRepository: ExercicesRepository,
  ) {}
  async GetAll(): Promise<Exercice[]> {
    return this.exercicesRepository.find();
  }

  async GetByName(name: string): Promise<Exercice[]> {
    const one = await this.exercicesRepository
      .createQueryBuilder('Exercice')
      .leftJoinAndSelect('Exercice.sessions', 'sessions');
    await one.andWhere(`Exercice.name like '%${name}%'`);
    return await one.getMany();
  }

  async Create(createExerciceDto: CreateExerciceDto): Promise<Exercice> {
    if ((await this.GetByName(createExerciceDto.name)).length) {
      throw new Error('Exercice already exist.');
    }
    const exercice = await this.exercicesRepository.create({
      name: createExerciceDto.name,
      benefits: createExerciceDto.benefits,
      calories: createExerciceDto.calories,
      duree: createExerciceDto.duree,
      equipments: createExerciceDto.equipments,
      image: createExerciceDto.image,
    });
    await this.exercicesRepository.save(exercice);

    return exercice;
  }

  async Upload(image: string): Promise<string> {
    try {
      // Store the image in the database using the appropriate ORM or query builder
      const newImage = await this.exercicesRepository.create({ image: image });
      await this.exercicesRepository.save(newImage);

      return 'Image uploaded successfully';
    } catch (error) {
      console.error('Error uploading image:', error);
      return 'Error uploading image';
    }
  }
}
