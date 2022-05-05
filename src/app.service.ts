//Gerencia os serviços das rotas

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getIMC(peso: string, altura: string): string {
    const weight = parseFloat(peso);
    const height = parseFloat(altura);
    const imc = parseFloat((weight / (height * height)).toFixed(2));

    return 'Seu IMC é: ' + imc;
  }
}
