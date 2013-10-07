Ext.define('GTTrans.controller.PesquisaController', {
    extend      : 'Ext.app.Controller',
    
    config : {
        refs : {
            mainView        : "#mainView",
            btPesquisar     : "#btPesquisar"
        },
        
        control : {
            btPesquisar : {
                tap : 'pesquisar'
            }
        }
    },
    
    pesquisar : function() {
        
    }
});