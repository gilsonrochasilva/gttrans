Ext.define('GTTrans.controller.PesquisaController', {
    extend      : 'Ext.app.Controller',
    
    config : {
        refs : {
            mainView                    : "#mainView",
            resultadoSimplesView        : "#resultadoSimplesView",
            resultadoCompletoView       : "#resultadoCompletoView",
            placa                       : "#tfPlaca",
            renavam                     : "#tfRenavam",
            btPesquisar                 : "#btPesquisar",
            btVoltarPesquisa    : "#btVoltarPesquisa"
        },
        
        control : {
            btPesquisar : {
                tap : 'pesquisar'
            },
            
            btVoltarPesquisa : {
                tap : 'voltar'
            }
        }
    },
    
    pesquisar : function() {
        var _this = this;
        var renavam = this.getRenavam().getValue();
        
        var multaStore = Ext.getStore('multaStore');
        multaStore.removeAll(true);
        
        var proxy = multaStore.getProxy();
        proxy.setExtraParam('placa', this.getPlaca().getValue());
        proxy.setExtraParam('renavam', renavam);
            
        multaStore.load(function(records, operation, success) {
            if(success) {
                if(records.length > 0) {
                    if(renavam != null) {
                        _this.getResultadoCompletoView().atualizar(records);
                        _this.getMainView().avancar();
                    } else {
                        _this.getResultadoSimplesView().atualizar(records);
                        _this.getMainView().avancar(2);
                    }
                } else {
                    Ext.Msg.alert('Alerta', 'Nenhum registro encontrado.', Ext.emptyFn);
                }
            } else {
                Ext.Msg.alert('Alerta', 'Erro ao tentar fazer a consulta. Por favor, verifique sua conexão com a internet.', Ext.emptyFn);
            }
        }, this);
    },
            
    voltar : function() {
        this.getMainView().voltar();
    }
});