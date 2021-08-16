import { UserResponseModel } from './user-response.model';
import { ConquistaModel } from './conquista.model';
import { Time } from './time.model';

export class UserModel {
  nome: string;
  email: string;
  nivel: string;
  profissao: string;
  pontuacao: number;
  ranking: number;
  time: Time;
  conquistas: ConquistaModel[];

  constructor(userResponse?: UserResponseModel){
    if (!userResponse) {
      return;
    }

    this.nome = userResponse.nome;
    this.email = userResponse.email;
    this.nivel = userResponse.nivel;
    this.profissao = userResponse.profissao;
    this.pontuacao = userResponse.pontuacao;
    this.ranking = userResponse.ranking;
    this.time = userResponse.time;
    this.conquistas = userResponse.conquistas;
  }
}
