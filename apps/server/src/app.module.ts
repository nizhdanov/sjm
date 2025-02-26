import { Module } from '@nestjs/common';

import { DepartmentsController } from './departments.controller';
import { DirectionsController } from './directions.controller';
import { InstitutesController } from './institutes.controller';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [InstitutesController, DepartmentsController, DirectionsController],
  providers: [PrismaService]
})
export class AppModule {}
