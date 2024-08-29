// Classe TorreDeControle que implementa a interface Mediator
var TorreDeControle = /** @class */ (function () {
    function TorreDeControle() {
        this.avioes = [];
    }
    // Método para adicionar aviões à torre de controle
    TorreDeControle.prototype.registrarAviao = function (aviao) {
        this.avioes.push(aviao);
        aviao.setMediator(this);
    };
    // Método para notificar eventos entre aviões
    TorreDeControle.prototype.notify = function (sender, event) {
        for (var _i = 0, _a = this.avioes; _i < _a.length; _i++) {
            var aviao = _a[_i];
            if (aviao !== sender) {
                aviao.receberNotificacao(event);
            }
        }
    };
    return TorreDeControle;
}());
// Classe Aviao que representa um avião
var Aviao = /** @class */ (function () {
    function Aviao(nome) {
        this.nome = nome;
    }
    // Método para definir o mediador (torre de controle)
    Aviao.prototype.setMediator = function (mediator) {
        this.mediator = mediator;
    };
    // Método para enviar notificações para a torre de controle
    Aviao.prototype.enviarNotificacao = function (event) {
        console.log(this.nome + " enviando notifica\u00E7\u00E3o: " + event);
        this.mediator.notify(this, event);
    };
    // Método para receber notificações de outros aviões
    Aviao.prototype.receberNotificacao = function (event) {
        console.log(this.nome + " recebeu notifica\u00E7\u00E3o: " + event);
    };
    return Aviao;
}());
// Exemplo de uso
var torreDeControle = new TorreDeControle();
var aviao1 = new Aviao('Avião 1');
var aviao2 = new Aviao('Avião 2');
var aviao3 = new Aviao('Avião 3');
torreDeControle.registrarAviao(aviao1);
torreDeControle.registrarAviao(aviao2);
torreDeControle.registrarAviao(aviao3);
aviao1.enviarNotificacao('Pronto para decolar');
aviao2.enviarNotificacao('Aterrissando');
