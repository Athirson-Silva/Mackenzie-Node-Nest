//Gerencia rotas de interação (Get, post, etc), apenas as rotas
import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':peso/:altura') // localhost/peso/altura
  getIMC(@Param('peso') peso, @Param('altura') altura): string {
    return this.appService.getIMC(peso, altura);
  }
}
