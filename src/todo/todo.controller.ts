import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { TodoService } from "./todo.service";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { UpdateTodoDto } from "./dto/update-todo.dto";
import { Todo } from "./models/todo.model";

@Controller("todo")
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.todoService.findOne(id);
  }

  @Patch("/complete/:id")
  async completeTodo(@Param("id") id: string): Promise<Todo | null> {
    return this.todoService.updateTaskCompletion(id);
  }
  @Patch(":id")
  async updateTodo(
    @Param("id") id: string,
    @Body() updateData: Partial<Todo>
  ): Promise<Todo | null> {
    return this.todoService.updateTodoFields(id, updateData);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.todoService.remove(id);
  }
}
