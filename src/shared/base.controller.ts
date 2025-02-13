import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BaseService } from './base.service';

export abstract class BaseController<T, CreateDto, UpdateDto> {
  constructor(protected readonly baseService: BaseService<T, CreateDto, UpdateDto>) {}

  @Post()
  async create(@Body() createDto: CreateDto): Promise<T> {
    return this.baseService.create(createDto);
  }

  @Get()
  async findAll(): Promise<T[]> {
    return this.baseService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<T | null> {
    return this.baseService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDto: UpdateDto): Promise<T> {
    return this.baseService.update(id, updateDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<T> {
    return this.baseService.remove(id);
  }
}
