import { Injectable } from '@nestjs/common';

@Injectable()
export class healthService {
  getHealth(): string {
    return 'Hello';
  }
}
