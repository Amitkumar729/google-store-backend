import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./schemas/user.schema";
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('create-user')
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }

    // @Get()
    // getAllUsers() {
    //     return this.userService.getAllUsers();
    // }
}



// export class UserController {
//     constructor(private readonly userService: UserService) {}

//     @Post('create-user')
//     async create(@Body() createUserDto: CreateUserDto): Promise<User> {
//         return this.userService.create(createUserDto);
//     }
// }