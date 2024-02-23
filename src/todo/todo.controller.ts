import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import TodoService from './todo.service';
import CreateTodoDto from './dto/create-todo.dto';
import UpdateTodoDto from './dto/update-todo.dto';
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  // get all todos
  @Get()
  getTodos() {
    return this.todoService.getAllTodos();
  }

  // get todo by id
  @Get(':id')
  async getTodoById(@Param('id') id: any) {
    return this.todoService.getTodoById((id));
  }

  // create todo
  @Post()
  async createTodo(@Body() todo: CreateTodoDto) {
    return this.todoService.createTodo(todo);
  }

  // update todo
  @Put(':id')
  async updatePost(@Param('id') id: string, @Body() todo: UpdateTodoDto) {
    return this.todoService.updateTodo((id), todo);
  }

  //delete todo
  @Delete(':id')
  async deleteTodo(@Param('id') id: string) {
    this.todoService.deleteTodo(Number(id));
  }
}
