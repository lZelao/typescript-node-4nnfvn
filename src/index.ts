// Interface Mediator define o contrato para o Mediador
interface Mediator {
  notify(sender: object, event: string): void;
}

// Classe TorreDeControle que implementa a interface Mediator
class TorreDeControle implements Mediator {
  private avioes: Aviao[] = [];

  // Método para adicionar aviões à torre de controle
  public registrarAviao(aviao: Aviao): void {
    this.avioes.push(aviao);
    aviao.setMediator(this);
  }

  // Método para notificar eventos entre aviões
  public notify(sender: object, event: string): void {
    for (const aviao of this.avioes) {
      if (aviao !== sender) {
        aviao.receberNotificacao(event);
      }
    }
  }
}

// Classe Aviao que representa um avião
class Aviao {
  private mediator: Mediator;
  private nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  // Método para definir o mediador (torre de controle)
  public setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }

  // Método para enviar notificações para a torre de controle
  public enviarNotificacao(event: string): void {
    console.log(`${this.nome} enviando notificação: ${event}`);
    this.mediator.notify(this, event);
  }

  // Método para receber notificações de outros aviões
  public receberNotificacao(event: string): void {
    console.log(`${this.nome} recebeu notificação: ${event}`);
  }
}

// Exemplo de uso
const torreDeControle = new TorreDeControle();

const aviao1 = new Aviao('Avião 1');
const aviao2 = new Aviao('Avião 2');
const aviao3 = new Aviao('Avião 3');


torreDeControle.registrarAviao(aviao1);
torreDeControle.registrarAviao(aviao2);
torreDeControle.registrarAviao(aviao3);

aviao1.enviarNotificacao('Pronto para decolar');
aviao2.enviarNotificacao('Aterrissando');
