Ext.define('GTTrans.controller.DetalheAutuacaoController', {
    extend  : 'Ext.app.Controller',
    
    config : {
        refs : {
            mainView                : "#mainView",
            btVoltarDetalheAutuacao : "#btVoltarDetalheAutuacao",
            btCopiarCodigoBarras    : "#btCopiarCodigoBarras",
            tfCodigoBarras          : "#tfCodigoBarras"
        },
        
        control : {
            btVoltarDetalheAutuacao : {
                tap : 'voltar'
            },
            
            btCopiarCodigoBarras : {
                tap : 'copiarCodigoBarras'
            }
        }
    },
   
    voltar : function() {
        this.getMainView().voltar(2);
    },
    
    copiarCodigoBarras : function() {
        window.plugins.clipboard.copy(this.getTfCodigoBarras().getValue(),
            function() {
                Ext.Msg.alert('Código de Barras', 'Código de barras copiado com sucesso.<br />Agora você pode usar o COLAR em outro aplicativo.', Ext.emptyFn);
            },
            function() {
                Ext.Msg.alert('Alerta', 'Não foi possível copiar o código de barras.', Ext.emptyFn);
            }
        );
    }
});