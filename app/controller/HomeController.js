Ext.define('GTTrans.controller.HomeController', {
    extend      : 'Ext.app.Controller',
    
    config: {
        refs: {
            mainView        : "#mainView",
            btEntrar        : "#btEntrar",
            btSobre         : "#btSobre",
            btSair          : "#btSair"
        },
        control: {
            btEntrar : {
                tap : 'showHome'
            }
        }
    },
    
    showHome : function () {
        this.getMainView().avancar();
    }
});