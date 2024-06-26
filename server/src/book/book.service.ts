import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  find(): string {
    console.log('응답');
    return 'TEST';
  }
}
