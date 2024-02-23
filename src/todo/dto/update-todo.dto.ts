// import { PartialType } from '@nestjs/mapped-types';
// import { CreateTodoDto } from './create-todo.dto';

export class UpdateTodoDto {
  id: number;
  title: string;
  content: string;
  f_done: boolean;
}

export default UpdateTodoDto;
