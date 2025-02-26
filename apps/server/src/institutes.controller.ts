import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

import { PrismaService } from './prisma.service';

@ApiTags('Институты')
@Controller('institutes')
export class InstitutesController {
  constructor(private readonly prismaService: PrismaService) {}

  @ApiOperation({ summary: 'Create institute' })
  @Post()
  async createInstitute(@Body() data: Prisma.InstituteCreateInput) {
    return this.prismaService.institute.create({
      data
    });
  }

  @ApiOperation({ summary: 'Get institutes' })
  @ApiQuery({ name: 'search', required: false })
  @Get()
  async getInstitutes(@Query('search') search?: string) {
    return this.prismaService.institute.findMany({
      where: {
        fullName: {
          contains: search
        }
      }
    });
  }

  @ApiOperation({ summary: 'Update institute by full name' })
  @Put(':fullName')
  async updateInstitute(
    @Param('fullName') fullName: string,
    @Body() data: Prisma.InstituteUpdateInput
  ) {
    return this.prismaService.institute.update({
      where: { fullName },
      data
    });
  }

  @ApiOperation({ summary: 'Delete institute by full name' })
  @Delete(':fullName')
  async deleteInstitute(@Param('fullName') fullName: string) {
    return this.prismaService.institute.delete({
      where: { fullName }
    });
  }
}
