Ext.define('GTTrans.controller.ResultadoSimplesController', {
    extend      : 'Ext.app.Controller',
    
    config : {
        refs : {
            mainView                    : "#mainView",
            btVoltarResultadoSimples    : "#btVoltarResultadoSimples"
        },
        
        control : {
            btVoltarResultadoSimples : {
                tap : 'voltar'
            }
        }
    },
   
    voltar : function() {
        this.getMainView().voltar(2);
    }
});