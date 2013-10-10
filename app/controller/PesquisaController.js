Ext.define('GTTrans.controller.PesquisaController', {
    extend      : 'Ext.app.Controller',
    
    config : {
        refs : {
            mainView                : "#mainView",
            resultadoSimplesView    : "#resultadoSimplesView",
            placa                   : "#tfPlaca",
            renavam                 : "#tfRenavam",
            btPesquisar             : "#btPesquisar"
        },
        
        control : {
            btPesquisar : {
                tap : 'pesquisar'
            }
        }
    },
    
    pesquisar : function() {
        var renavam = this.getRenavam().getValue();
        
        var multaStore = Ext.getStore('multaStore');
        multaStore.removeAll(true);
        
        var proxy = multaStore.getProxy();
        proxy.setExtraParam('placa', this.getPlaca().getValue());
        proxy.setExtraParam('renavam', renavam);
            
        multaStore.load(function(records, operation, success) {
            Ext.Msg.alert('Title', 'The ' + records.length, Ext.emptyFn);
            if(renavam != null) {
                this.getMainView().avancar(2);
            } else {
                this.getMainView().avancar();
            }
        }, this);
    }
});