Ext.define('GTTrans.view.MainView', {
    extend      : 'Ext.Container',
    xtype       : 'mainView',
    fullscreen  : true,
    id          : 'mainView',
    
    requires : [
        'GTTrans.view.HomeView',
        'GTTrans.view.PesquisaView',
        'GTTrans.view.ResultadoCompletoView',
        'GTTrans.view.ResultadoSimplesView'
    ],

    config: {
        layout: {
            type: 'card'
        },
        
        items : [
            { xtype : 'homeView' },
            { xtype : 'pesquisaView' },
            { xtype : 'resultadoCompletoView' },
            { xtype : 'resultadoSimplesView' }
        ]
    },
    
    avancar : function() {
        var selecionado = this.indexOf(this.getActiveItem());
        this.animateActiveItem((selecionado + 1), {type : 'slide', direction : 'left'});
    },

    voltar : function() {
        var selecionado = this.indexOf(this.getActiveItem());
        this.animateActiveItem((selecionado - 1), {type : 'slide', direction : 'right'});
    }
});