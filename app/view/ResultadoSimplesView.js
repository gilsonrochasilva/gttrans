Ext.define('GTTrans.view.ResultadoSimplesView', {
    extend: 'Ext.Panel',
    xtype:  'resultadoSimplesView',

    config: {
        scrollable: 'vertical',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Consulta de Multas SeMOB'
            },
            {
                xtype: 'fieldset',
                width: '95%',
                defaults: {
                    labelAlign: 'top',
                    readOnly: true
                },
                title: 'Veículo',
                items: [
                    {
                        xtype: 'textfield',
                        itemId: 'tfPlaca',
                        label: 'Placa'
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'tfMarca',
                        label: 'Marca'
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'tfCategoria',
                        label: 'Categoria'
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'tfUf',
                        label: 'UF'
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'tfEspecie',
                        label: 'Espécie'
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'tfAutuacoes',
                        label: 'Nº de Autuações'
                    }
                ]
            }
        ]
    },

    atualizar: function(record) {
        
    }
});