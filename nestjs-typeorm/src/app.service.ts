import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Meyra Gumussu - Muhammed Ali Ozdemir';
  }
}
