import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('users') // users is the url param
// Resourses
export class UsersController {
  // eslint-disable-next-line prettier/prettier

  // Http Methods Decorater

  // @Get('users')
  /* users is the url param
   * [or put the route in @Controller]
   *to use it in all http methods (get put patch delete)
   */

  @Get() // General Get Method to Get all users
  getAllUsers(): string[] {
    return ['user1', 'user2', 'user3'];
  }

  @Get(':username') // Dynamic Param ":param"
  // @Param() => contains the params object
  // @Param(username) => Distructure for params object to catch username direct
  getUser(@Param('username') username: string): string {
    return username;
  }

  @Post()
  // @Req => To catch the received Request [There is another methods]
  // Nest automaticlly Change The Json Body received to Object [No need to middleware as NodeJS (BodyParser)]
  //   createUser(@Req() request: Request): string {
  //     // console.log(request.body);
  //     return 'Create new user';
  //   }

  // @Body => catch req body directly without using @Req
  createUser(@Body() userData: any): string {
    // Logic to be implemented in services
    return userData;
  }

  @Patch()
  updateUser(): string {
    return 'Update User';
  }

  @Delete(':userId')
  // Handle Status Code Using Nest
  @HttpCode(204)
  // OR
  @HttpCode(HttpStatus.NO_CONTENT) // Using Status Msg
  // --
  removeUser(@Param('userId') userId: string): void {
    // removeUser(@Param('userId') userId: string, @Res() res): void {
    // res.status(204).send(); // Using Express not Nest
  }
}
