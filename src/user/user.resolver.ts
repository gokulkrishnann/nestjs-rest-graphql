import { User } from './models/user.model';
import {
  Resolver,
  Query,
  Args,
  InputType,
  Field,
  Mutation,
} from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';

@InputType()
class UserInput {
  @Field()
  id: number;

  @Field()
  email: string;
}

@InputType()
class UserCreateInput {
  @Field()
  email: string;

  @Field()
  name: string;

  @Field()
  mobile: string;

  @Field()
  city: string;

  @Field()
  country: string;
}

@InputType()
class UserDeleteInput {
  @Field()
  id: number;
}

@Resolver(User)
export class UserResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Query((returns) => [User])
  async users(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  @Query((returns) => User)
  async user(@Args('id') id: number): Promise<User> {
    return this.prismaService.user.findUnique({ where: { id } });
  }

  @Mutation((returns) => User)
  async signupUser(@Args('data') data: UserCreateInput): Promise<User> {
    return this.prismaService.user.create({
      data: {
        email: data.email,
        name: data.name,
        mobile: data.mobile,
        city: data.city,
        country: data.country,
      },
    });
  }

  @Mutation((returns) => User)
  async deleteUser(@Args('data') data: UserDeleteInput): Promise<User> {
    const { id } = data;
    return this.prismaService.user.delete({
      where: { id },
    });
  }
}
