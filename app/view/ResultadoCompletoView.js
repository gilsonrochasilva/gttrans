Ext.define('GTTrans.view.ResultadoCompletoView', {
    extend  : 'Ext.Panel',
    xtype   : 'resultadoCompletoView',
    id      : 'resultadoCompletoView',

    config: {
        layout: {
            type: 'fit'
        },
        scrollable: false,
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Consulta de Multas SeMOB',
                
                items : {
                    id		: 'btVoltarResultadoCompleto',
                    text	: 'Voltar',
                    ui		: 'back'
                }
            },
            {
                xtype: 'tabpanel',
                centered: false,
                layout: {
                    animation: 'fade',
                    type: 'card'
                },
                items: [
                    {
                        xtype: 'container',
                        title: 'Proprietário',
                        height: '100%',
                        layout: {
                            type: 'vbox'
                        },
                        
                        items: [
                            {
                                xtype: 'fieldset',
                                height: '100%',
                                id: 'formProprietario',
                                defaults: {
                                    labelAlign: 'top',
                                    readOnly: true
                                },
                                scrollable: 'vertical',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        itemId: 'tfNome',
                                        label: 'Nome'
                                    },
                                    {
                                        xtype: 'textfield',
                                        itemId: 'tfEndereco',
                                        label: 'Endereço'
                                    },
                                    {
                                        xtype: 'textfield',
                                        itemId: 'tfNumero',
                                        label: 'Número'
                                    },
                                    {
                                        xtype: 'textfield',
                                        itemId: 'tfComplemento',
                                        label: 'Complemento'
                                    },
                                    {
                                        xtype: 'textfield',
                                        itemId: 'tfBairro',
                                        label: 'Bairro'
                                    },
                                    {
                                        xtype: 'textfield',
                                        itemId: 'tfUf',
                                        label: 'UF'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        title: 'Veículo',
                        height: '100%',
                        layout: {
                            type: 'fit'
                        },
                        
                        items: [
                            {
                                xtype: 'fieldset',
                                height: '100%',
                                id: 'formVeiculo',
                                scrollable: 'vertical',
                                defaults: {
                                    labelAlign: 'top',
                                    readOnly: true
                                },
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
                                        itemId: 'tfEspecie',
                                        label: 'Espécie'
                                    },
                                    {
                                        xtype: 'textfield',
                                        itemId: 'tfUf',
                                        label: 'UF'
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
                    {
                        xtype: 'container',
                        title: 'Autuações',
			height: '100%',
                        layout: {
                            type: 'vbox'
                        },
                        items : [
                            {
                                id          : 'autuacoesList',
				xtype       : 'list',
				itemTpl     : '<span style="font-size:14px;">Nº: {ait}, Data: {dtAit}</span>',
				width       : '100%',
				height      : '100%',
				ui          : 'round',
                                store       : 'multaStore'
                            }
                        ]
                    }
                ]
            }
        ]
    },

    atualizar : function(records) {
        var formProprietario = Ext.ComponentQuery.query("#formProprietario")[0];        
        formProprietario.down("#tfNome").setValue(records[0].get('nmProprietario'));
        formProprietario.down("#tfEndereco").setValue(records[0].get('nmLogradouroprop'));
        formProprietario.down("#tfNumero").setValue(records[0].get('nrLogradouroprop'));
        formProprietario.down("#tfComplemento").setValue(records[0].get('dsComplementoprop'));
        formProprietario.down("#tfBairro").setValue(records[0].get('nmBairroprop'));
        formProprietario.down("#tfUf").setValue(records[0].get('sgUfprop'));
        
        var placa = records[0].get('nrPlaca');
        placa = placa.substr(0, 3) + '-' + placa.substr(3, 7);
        
        var formVeiculo = Ext.ComponentQuery.query("#formVeiculo")[0];
        
        var placa = records[0].get('nrPlaca');
        placa = placa.substr(0, 3) + '-' + placa.substr(3, 7);
        
        formVeiculo.down("#tfPlaca").setValue(placa);
        formVeiculo.down("#tfMarca").setValue(records[0].get('dsMarcadetran'));
        formVeiculo.down("#tfCategoria").setValue(records[0].get('dsCategoria'));
        formVeiculo.down("#tfUf").setValue(records[0].get('sgUfplaca'));
        formVeiculo.down("#tfEspecie").setValue(records[0].get('dsEspeciedetran'));
        formVeiculo.down("#tfAutuacoes").setValue(records.length);
        
        var autuacoesList = Ext.ComponentQuery.query("#autuacoesList")[0];
        autuacoesList.refresh();
    }
});