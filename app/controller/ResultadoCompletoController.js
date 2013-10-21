Ext.define('GTTrans.controller.ResultadoCompletoController', {
    extend      : 'Ext.app.Controller',
    
    config : {
        refs : {
            mainView                    : "#mainView",
            btVoltarResultadoSimples    : "#btVoltarResultadoCompleto"
        },
        
        control : {
            btVoltarResultadoCompleto : {
                tap : 'voltar'
            }
        }
    },
   
    voltar : function() {
        Ext.Msg.alert('Sobre', '=D');
        this.getMainView().voltar();
    }
});