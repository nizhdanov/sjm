import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

import { PrismaService } from './prisma.service';

@ApiTags('Кафедры')
@Controller('departments')
export class DepartmentsController {
  constructor(private readonly prismaService: PrismaService) {}

  @ApiOperation({ summary: 'Create department' })
  @Post()
  async createDepartment(@Body() data: Prisma.DepartmentCreateInput) {
    return this.prismaService.department.create({
      data
    });
  }

  @ApiOperation({ summary: 'Get departments' })
  @ApiQuery({ name: 'search', required: false })
  @Get()
  async getDepartments(@Query('search') search?: string) {
    return this.prismaService.department.findMany({
      where: {
        fullName: {
          contains: search
        }
      }
    });
  }

  @ApiOperation({ summary: 'Update department by full name' })
  @Put(':fullName')
  async updateDepartment(
    @Param('fullName') fullName: string,
    @Body() data: Prisma.DepartmentUpdateInput
  ) {
    return this.prismaService.department.update({
      where: { fullName },
      data
    });
  }

  @ApiOperation({ summary: 'Delete department by full name' })
  @Delete(':fullName')
  async deleteDepartment(@Param('fullName') fullName: string) {
    return this.prismaService.department.delete({
      where: { fullName }
    });
  }
}
