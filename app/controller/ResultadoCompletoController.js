Ext.define('GTTrans.controller.ResultadoCompletoController', {
    extend      : 'Ext.app.Controller',
    
    config : {
        refs : {
            mainView                    : "#mainView",
            detalheAutuacaoView         : "#detalheAutuacaoView",
            btVoltarResultadoCompleto   : "#btVoltarResultadoCompleto",
            autuacoesList               : "#autuacoesList"
        },
        
        control : {
            btVoltarResultadoCompleto : {
                tap : 'voltar'
            },
            
            autuacoesList : {
                select : 'onSelectAutuacaoList'
            }
        }
    },
   
    voltar : function() {
        this.getMainView().voltar();
    },
    
    onSelectAutuacaoList : function(view, record) {
        this.getDetalheAutuacaoView().atualizar(record);
        this.getMainView().avancar(2);
    }
});