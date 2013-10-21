Ext.define('GTTrans.view.ResultadoSimplesView', {
    extend  : 'Ext.Panel',
    xtype   : 'resultadoSimplesView',
    id      : 'resultadoSimplesView',

    config: {
        scrollable: 'vertical',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Consulta de Multas SeMOB',
                
                items : {
                    id		: 'btVoltarResultadoSimples',
                    text	: 'Voltar',
                    ui		: 'back'
                }
            },
            {
                xtype: 'fieldset',
                width: '95%',
                id: 'formResultadoSimples',
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

    atualizar : function(records) {
        var formResultadoSimples = Ext.ComponentQuery.query("#formResultadoSimples")[0];
        
        var placa = records[0].get('nrPlaca');
        placa = placa.substr(0, 3) + '-' + placa.substr(3, 7);
        
        formResultadoSimples.down("#tfPlaca").setValue(placa);
        formResultadoSimples.down("#tfMarca").setValue(records[0].get('dsMarcadetran'));
        formResultadoSimples.down("#tfCategoria").setValue(records[0].get('dsCategoria'));
        formResultadoSimples.down("#tfUf").setValue(records[0].get('sgUfplaca'));
        formResultadoSimples.down("#tfEspecie").setValue(records[0].get('dsEspeciedetran'));
        formResultadoSimples.down("#tfAutuacoes").setValue(records.length);
    }
});