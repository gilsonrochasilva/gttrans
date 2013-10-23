Ext.define('GTTrans.controller.HomeController', {
    extend : 'Ext.app.Controller',
    
    config: {
        refs: {
            mainView            : "#mainView",
            btEntrar            : "#btEntrar",
            btSobre             : "#btSobre",
            btSair              : "#btSair",
            btVoltarPesquisa    : "#btVoltarPesquisa"
        },
        control: {
            btEntrar : {
                tap : 'avancar'
            },
            
            btSobre : {
                tap : 'sobre'
            },
            
            btSair : {
                tap : 'sair'
            }
        }
    },
    
    avancar : function () {
        this.getMainView().avancar();
    },
            
    sobre : function () {
        Ext.Msg.alert('Sobre', 'Prefeitura Municipal de Belém.<br/>Todos os direitos reservados © 2013.<br/>Desenvolvido pela Equipe Web da Cinbesa.');
    },
            
    sair : function () {
        navigator.app.exitApp();
    }
});