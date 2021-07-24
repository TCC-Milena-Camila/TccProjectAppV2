import { ConquistaModel } from './conquista.model';

export class UserResponseModel {
  nome: string;
  email: string;
  nivel: string;
  profissao: string;
  pontuacao: number;
  ranking: number;
  time: string;
  conquistas: ConquistaModel[];
}
