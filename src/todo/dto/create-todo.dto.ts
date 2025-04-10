import { IsOptional } from "class-validator";

export class CreateTodoDto {

  title: string;

  @IsOptional()

  isCompleted?: boolean = false;

}
