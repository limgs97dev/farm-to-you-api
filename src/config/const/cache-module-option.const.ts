import KeyvRedis from '@keyv/redis';
import { CacheModuleOptions } from '@nestjs/cache-manager';

export const CacheModuleOption: CacheModuleOptions = {
  useFactory: async () => {
    return {
      stores: [new KeyvRedis('redis://localhost:6379')],
    };
  },
};
