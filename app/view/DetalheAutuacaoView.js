Ext.define('GTTrans.view.DetalheAutuacaoView', {
    extend      : 'Ext.Panel',
    xtype       : 'detalheAutuacaoView',
    id          : 'detalheAutuacaoView',
    
    config : {
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
                    id      : 'btVoltarDetalheAutuacao',
                    text    : 'Voltar',
                    ui      : 'back'
                }
            },
            {
                xtype: 'fieldset',
                width: '95%',
                id: 'formDetalheAutuacao',
                defaults: {
                    labelAlign: 'top',
                    readOnly: true
                },
                title: 'Detalhes da Autuação',
                items: [
                    {
                        xtype: 'textfield',
                        itemId: 'tfAutuacao',
                        label: 'Autuação'
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'tfDataAutuacao',
                        label: 'Data de Autuação'
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'tfDataNotificacao',
                        label: 'Data de Notificação'
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'tfDataPenalidade',
                        label: 'Data de Penalidade'
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'tfDefesa',
                        label: 'Defesa'
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'tfRecursoJARI',
                        label: 'Recurso JARI'
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'tfRecursoCETRAN',
                        label: 'Recurso CETRAN'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                width: '95%',
                id: 'formCodigoBarras',
                title: 'Código de Barras',
                items: [
                    {
                        id : 'tfCodigoBarras',
                        xtype: 'textfield',
                        labelWidth: '100%',
                        labelWrap: true
                    }
                ]
            },
            {
                xtype: 'button',
                id: 'btCopiarCodigoBarras',
                ui: 'action',
                width: '75%',
                text: 'Copiar código de barras'
            }
        ]
    },
    
    atualizar : function(record) {
        var formDetalheAutuacao = Ext.ComponentQuery.query("#formDetalheAutuacao")[0];        
        formDetalheAutuacao.down("#tfAutuacao").setValue(record.get('ait'));
        formDetalheAutuacao.down("#tfDataAutuacao").setValue(record.get('dtAit'));
        formDetalheAutuacao.down("#tfDataNotificacao").setValue(record.get('dtNaitFormatada'));
        formDetalheAutuacao.down("#tfDataPenalidade").setValue(record.get('dtNapFormatada'));
        formDetalheAutuacao.down("#tfDefesa").setValue(record.get('stDefesa'));
        formDetalheAutuacao.down("#tfRecursoJARI").setValue(record.get('stRecursojari'));
        formDetalheAutuacao.down("#tfRecursoCETRAN").setValue(record.get('stRecursocetran'));
        
        var formCodigoBarras = Ext.ComponentQuery.query("#formCodigoBarras")[0];        
        formCodigoBarras.down("#tfCodigoBarras").setLabel(record.get('linhaDigitavel'));
    }
});