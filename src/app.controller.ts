import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/test1/:topic')
  test1(@Param('topic') topic) {
    this.appService.subscribe(topic, 'test1');
  }

  @Get('/test2/:topic')
  test2(@Param('topic') topic) {
    this.appService.subscribe(topic, 'test2');
  }
}