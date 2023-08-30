import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Exercice } from './exercices.entity';
import { ExercicesService } from './exercices.service';
import { CreateExerciceDto } from './dto/createExercice.dto';

@Controller('exercices')
export class ExercicesController {
  private context;
  constructor(private readonly exerciceService: ExercicesService) {
    this.context = this.constructor.name;
  }
  @Get('/all')
  async getAllExercices(): Promise<Exercice[]> {
    return await this.exerciceService.GetAll();
  }

  @Get('/:name')
  async getExercicesByName(@Param('name') name: string): Promise<Exercice[]> {
    return await this.exerciceService.GetByName(name);
  }

  @Post('/')
  async createExercices(
    @Body() createExerciceDto: CreateExerciceDto,
  ): Promise<Exercice> {
    return await this.exerciceService.Create(createExerciceDto);
  }

  @Post()
  async uploadImage(@Body() { image }): Promise<string> {
    return await this.exerciceService.Upload(image);
  }
}
