import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { UpdateTodoDto } from "./dto/update-todo.dto";
import { Todo, TodoDocument } from "./models/todo.model";

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name) private readonly todoModel: Model<TodoDocument>
  ) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const newTodo = new this.todoModel(createTodoDto);
    return newTodo.save();
  }

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async findOne(id: string): Promise<Todo | null> {
    return this.todoModel.findById(id).exec();
  }
  async updateTaskCompletion(id: string): Promise<Todo | null> {
    try {
      const todo = await this.todoModel.findById(id).exec();
      if (!todo) {
        return null;
      }

      todo.isCompleted = !todo.isCompleted;

      return await todo.save();
    } catch (error) {
      console.log(error.message);

      throw error;
    }
  }
  async updateTodoFields(
    id: string,
    updateData: Partial<Todo>
  ): Promise<Todo | null> {
    try {
      const updated = await this.todoModel.findByIdAndUpdate(id, updateData, {
        new: true,
      });
      return updated;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }

  async remove(id: string): Promise<Todo | null> {
    return this.todoModel.findByIdAndDelete(id).exec();
  }
}
