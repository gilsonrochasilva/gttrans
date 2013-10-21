Ext.define('GTTrans.controller.ResultadoCompletoController', {
    extend      : 'Ext.app.Controller',
    
    config : {
        refs : {
            mainView                    : "#mainView",
            btVoltarResultadoCompleto   : "#btVoltarResultadoCompleto"
        },
        
        control : {
            btVoltarResultadoCompleto : {
                tap : 'voltar'
            }
        }
    },
   
    voltar : function() {
        this.getMainView().voltar();
    }
});