import { ConquistaModel } from './conquista.model';
import { Time } from './time.model';

export class UserResponseModel {
  nome: string;
  email: string;
  nivel: string;
  profissao: string;
  pontuacao: number;
  ranking: number;
  time: Time;
  conquistas: ConquistaModel[];
}
