import { Context, Get, HttpResponseOK } from '@foal/core';

export class ApiController {

  @Get('/')
  index(ctx: Context) {
    return new HttpResponseOK({'message':'Hello von FoalTS!'});
  }

}
