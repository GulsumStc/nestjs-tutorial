import { CreateUserDto } from "./create-user.dto";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateUserDto extends PartialType(CreateUserDto) { }

/* 
The PartialType utility is used to create a new type based on an existing DTO (Data Transfer Object) class,
making all its properties optional.
*/

