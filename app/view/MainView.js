Ext.define('GTTrans.view.MainView', {
    extend      : 'Ext.Container',
    xtype       : 'mainView',
    fullscreen  : true,
    id          : 'mainView',
    
    requires : [
        'GTTrans.view.HomeView',
        'GTTrans.view.PesquisaView',
        'GTTrans.view.ResultadoCompletoView',
        'GTTrans.view.ResultadoSimplesView',
        'GTTrans.view.DetalheAutuacaoView'
    ],

    config: {
        layout: {
            type: 'card'
        },
        
        items : [
            { xtype : 'homeView' },
            { xtype : 'pesquisaView' },
            { xtype : 'resultadoCompletoView' },
            { xtype : 'resultadoSimplesView' },
            { xtype : 'detalheAutuacaoView' }
        ]
    },
    
    avancar : function(posicao) {
        if (typeof(posicao) === "undefined") {
            posicao = 1;
        }
        
        var selecionado = this.indexOf(this.getActiveItem());
        this.animateActiveItem((selecionado + posicao), {type : 'slide', direction : 'left'});
    },

    voltar : function(posicao) {
        if (typeof(posicao) === "undefined") {
            posicao = 1;
        }
        
        var selecionado = this.indexOf(this.getActiveItem());
        this.animateActiveItem((selecionado - posicao), {type : 'slide', direction : 'right'});
    }
});