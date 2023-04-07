import { Body, Controller, Delete, Get, Param, Post, Put, } from '@nestjs/common';
import createPositionDto from '../module/dto/createPosition';
import { PositionsService } from '../services/position.service';
import { ApiTags } from "@nestjs/swagger";

@Controller('position')
@ApiTags('Position')
export class positionController {
  constructor(private readonly PositionsService: PositionsService ) {}

  // get all todos
  @Get()
  getposition() {
    return this.PositionsService.getAllPositionss();
  }

  // get todo by id
  @Get(':id')
  getpositionById(@Param('id') id: number) {
    return this.PositionsService.getPositionsById(Number(id));
  }

  // create todo
  @Post()
  async createposition(@Body() position: createPositionDto) {
    return this.PositionsService.createPositions(position);
  }


  //delete todo
  @Delete(':id')
  async deleteposition(@Param('id') id: string) {
    this.PositionsService.deletePositions(Number(id));
  }
}