import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field((type) => Int)
  id: number;
  @Field()
  name: string;
  @Field()
  email: string;
  @Field()
  mobile: string;
  @Field()
  city: string;
  @Field()
  country: string;
}
