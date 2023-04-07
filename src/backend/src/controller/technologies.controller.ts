import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, } from '@nestjs/common';
import CreateTechnologiesDto from '../module/dto/createTechnologies.dto';
import { technologiesService } from '../services/technologies.service'; 
import { ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from 'src/auth/wt-auth.guard';


@Controller('technologie')
@ApiTags('Technologies')
export class technologieController {
  constructor(private readonly technologiesService : technologiesService) {}

  // get all todos
  //@UseGuards(JwtAuthGuard)
  @Get()
  gettechnologie() {
    return this.technologiesService.getAllTechnologies();
  }

  // get todo by id
  @Get(':id')
  gettechnologieById(@Param('id') id: number) {
    return this.technologiesService.getTechnologiesById(Number(id));
  }

  // create todo
  @Post()
  async createtechnologie(@Body() technologie: CreateTechnologiesDto) {
    return this.technologiesService.createTechnologie(technologie);
  }


  //delete todo
  @Delete(':id')
  async deletetechnologie(@Param('id') id: string) {
    this.technologiesService.deleteTechnologie(Number(id));
  }
}