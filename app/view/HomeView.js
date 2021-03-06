Ext.define('GTTrans.view.HomeView', {
    extend      : 'Ext.Panel',
    xtype       : 'homeView',
    fullscreen  : true,
    id          : 'homeView',

    config: {
        layout: {
            align: 'center',
            type: 'vbox'
        },
        scrollable: 'vertical',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Consulta de Multas SeMOB'
            },
            {
                xtype	: 'image',
                src	: 'res/images/logo.png',
                width	: '240px',
                height	: '232px',
                margin	: '20 0 0 0'
            },
            {
                xtype: 'button',
                id: 'btEntrar',
                margin: '10px 0 0 0',
                ui: 'action',
                width: '75%',
                text: 'Entrar'
            },
            {
                xtype: 'button',
                id: 'btSobre',
                margin: '10px 0 0 0',
                ui: 'action',
                width: '75%',
                text: 'Sobre'
            },
            /*{
                xtype: 'button',
                id: 'btSair',
                margin: '10px 0 0 0',
                ui: 'decline',
                width: '75%',
                text: 'Sair'
            },*/
            {
                xtype	: 'image',
                src	: 'res/images/logo_belem_h.png',
                width	: '240px',
                height	: '53px',
                margin	: '20 0 0 0'
            }
        ]
    }

});