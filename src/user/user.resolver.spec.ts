import { Test, TestingModule } from '@nestjs/testing';
import { User } from '@prisma/client';
import { UserResolver } from './user.resolver';

describe('User Resolver', () => {
  let resolver: UserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserResolver],
    }).compile();

    resolver = module.get<UserResolver>(UserResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
