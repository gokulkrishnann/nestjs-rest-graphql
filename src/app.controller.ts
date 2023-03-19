import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { AppService } from './app.service';
import { User } from '@prisma/client';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('prisma')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prismaService: PrismaService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  async users(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  @Post('users/create')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        email: { type: 'string' },
        mobile: { type: 'string' },
        city: { type: 'string' },
        country: { type: 'string' },
      },
    },
  })
  async createUser(
    @Body()
    userData: {
      name: string;
      email: string;
      mobile: string;
      city: string;
      country: string;
    },
  ): Promise<User> {
    return this.prismaService.user.create({
      data: {
        name: userData.name,
        email: userData.email,
        mobile: userData.mobile,
        city: userData.city,
        country: userData.country,
      },
    });
  }

  @Get('users/:id')
  async user(@Param('id') id: string): Promise<User> {
    return this.prismaService.user.findUnique({ where: { id: +id } });
  }

  @Delete('users/:id')
  async deleteUser(@Param('id') id: number): Promise<User> {
    return this.prismaService.user.delete({ where: { id: id } });
  }
}
