import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiQuery } from '@nestjs/swagger';
import { Prisma, FormName } from '@prisma/client';

import { QueryArray } from './decorators/query-array.decorator';
import { PrismaService } from './prisma.service';

@ApiTags('Направления подготовки')
@Controller('directions')
export class DirectionsController {
  constructor(private readonly prismaService: PrismaService) {}

  @ApiOperation({ summary: 'Create direction' })
  @Post()
  async createDirection(@Body() data: Prisma.DirectionCreateInput) {
    return this.prismaService.direction.create({
      data
    });
  }

  @ApiOperation({ summary: 'Get directions' })
  @ApiQuery({ name: 'search', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @ApiQuery({ name: 'offset', required: false })
  @ApiQuery({ name: 'levels', required: false })
  @ApiQuery({ name: 'institutes', required: false })
  @ApiQuery({ name: 'trials', required: false, type: 'string или string[]' })
  @ApiQuery({ name: 'forms', required: false, type: 'string или string[]' })
  @Get()
  async getDirections(
    @Query('search') search?: string,
    @Query('limit') limit?: string,
    @Query('offset') offset?: string,
    @QueryArray('levels') levels?: string[],
    @QueryArray('institutes') institutes?: string[],
    @QueryArray('trials') trials?: string[],
    @QueryArray('forms') forms?: FormName[]
  ) {
    return this.prismaService.direction.findMany({
      where: {
        AND: [
          // Поиск по названию
          {
            fullName: {
              contains: search
            }
          },
          // Фильтр по формам обучения
          {
            forms: {
              some: {
                name: {
                  in: forms
                }
              }
            }
          },
          // Фильтр по вступительным
          {
            trials: { hasEvery: trials ?? [] }
          },
          // Фильтр по уровню образования
          {
            level: {
              in: levels
            }
          },
          // Фильтр по институтам
          {
            department: {
              instituteFullName: {
                in: institutes
              }
            }
          }
        ]
      },
      take: Number(limit) || undefined,
      skip: Number(offset) || undefined
    });
  }

  @ApiOperation({ summary: 'Update direction by code' })
  @Put(':code')
  async updateDirection(@Param('code') code: string, @Body() data: Prisma.DirectionUpdateInput) {
    return this.prismaService.direction.update({
      where: { code },
      data
    });
  }

  @ApiOperation({ summary: 'Delete direction by code' })
  @Delete(':code')
  async deleteDirection(@Param('code') code: string) {
    return this.prismaService.direction.delete({
      where: { code }
    });
  }
}
