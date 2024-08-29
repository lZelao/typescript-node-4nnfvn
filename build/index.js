"use strict";
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
var aviao1 = new Aviao("Avião 1");
var aviao2 = new Aviao("Avião 2");
var aviao3 = new Aviao("Avião 3");
torreDeControle.registrarAviao(aviao1);
torreDeControle.registrarAviao(aviao2);
torreDeControle.registrarAviao(aviao3);
aviao1.enviarNotificacao("Pronto para decolar");
aviao2.enviarNotificacao("Aterrissando");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUtBLDZEQUE2RDtBQUM3RDtJQUFBO1FBQ1UsV0FBTSxHQUFZLEVBQUUsQ0FBQztJQWdCL0IsQ0FBQztJQWRDLG1EQUFtRDtJQUM1Qyx3Q0FBYyxHQUFyQixVQUFzQixLQUFZO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELDZDQUE2QztJQUN0QyxnQ0FBTSxHQUFiLFVBQWMsTUFBYyxFQUFFLEtBQWE7UUFDdkMsS0FBb0IsVUFBVyxFQUFYLEtBQUEsSUFBSSxDQUFDLE1BQU0sRUFBWCxjQUFXLEVBQVgsSUFBVyxFQUFFO1lBQTVCLElBQU0sS0FBSyxTQUFBO1lBQ1osSUFBSSxLQUFLLEtBQUssTUFBTSxFQUFFO2dCQUNsQixLQUFLLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbkM7U0FDSjtJQUNMLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFqQkQsSUFpQkM7QUFFRCx1Q0FBdUM7QUFDdkM7SUFJRSxlQUFZLElBQVk7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELHFEQUFxRDtJQUM5QywyQkFBVyxHQUFsQixVQUFtQixRQUFrQjtRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRUQsMkRBQTJEO0lBQ3BELGlDQUFpQixHQUF4QixVQUF5QixLQUFhO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLElBQUkseUNBQTBCLEtBQU8sQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsb0RBQW9EO0lBQzdDLGtDQUFrQixHQUF6QixVQUEwQixLQUFhO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLElBQUksd0NBQXlCLEtBQU8sQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQztBQUVELGlCQUFpQjtBQUNqQixJQUFNLGVBQWUsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO0FBRTlDLElBQU0sTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3BDLElBQU0sTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3BDLElBQU0sTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRXBDLGVBQWUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdkMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN2QyxlQUFlLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRXZDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ2hELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQyJ9