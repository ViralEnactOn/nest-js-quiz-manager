import { JwtModuleAsyncOptions } from '@nestjs/jwt';
import { config } from './app.config';

export const jwtConfig: JwtModuleAsyncOptions = {
  useFactory: () => {
    return {
      secret: config.appSecret,
      signOptions: { expiresIn: '1d' },
    };
  },
};
