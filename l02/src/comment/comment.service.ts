import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {

  findUserComments(id: number) {
    return `This action returns all comments for user ${id}`
  }
}
