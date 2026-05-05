import { User } from '../types/User';

export class UserService {
  findUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }
  listUsers(): User[] {
    return this.users;
    
  }
  private users: User[] = [];
  private currentId = 1;

  createUser(name: string, email: string, data_Nascimento: string, CPF: string) {
    const hoje = new Date();

    const [ day, month, year ] = data_Nascimento.split('/');
    const nascimento = new Date(Number(year), Number(month) - 1, Number(day));
    console.log(nascimento.getFullYear());
  
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
  
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
  
    if (idade < 18) {
      throw new Error('Usuário deve ter no mínimo 18 anos');
    }

    if(!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(CPF)) {
      throw new Error('CPF deve estar no formato XXX.XXX.XXX-XX');
    }
  
    const user = {
      id: this.users.length + 1,
      name,
      email,
      data_Nascimento,
      CPF
    };
  
    this.users.push(user);
  
    return user;
    }
  }