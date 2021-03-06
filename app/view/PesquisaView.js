Ext.define('GTTrans.view.PesquisaView', {
    extend: 'Ext.Panel',
    xtype:  'pesquisaView',

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
                title: 'Consulta de Multas SeMOB',
                
                items : {
                    id		: 'btVoltarPesquisa',
                    text	: 'Voltar',
                    ui		: 'back'
                }
            },
            {
                xtype: 'fieldset',
                width: '95%',
                title: 'Pesquisa',
                items: [
                    {
                        xtype: 'textfield',
                        id: 'tfPlaca',
                        label: 'Placa'//,
                        //value:'JTY-8069'
                    },
                    {
                        xtype: 'textfield',
                        disabled: true,
                        label: 'Para consulta detalhada informe também o Renavam',
                        labelWidth: '100%',
                        labelWrap: true,
                        autoCorrect: true
                    },
                    {
                        xtype: 'numberfield',
                        id: 'tfRenavam',
                        label: 'Renavam'//,
                        //value: '704932903'
                    }
                ]
            },
            {
                xtype: 'button',
                id: 'btPesquisar',
                ui: 'action',
                width: '75%',
                text: 'Pesquisar'
            }
        ]
    }

});