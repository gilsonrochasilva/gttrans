/*
 * File: app/view/PesquisaView.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

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
                title: 'Consulta de Multas SeMOB'
            },
            {
                xtype: 'fieldset',
                width: '95%',
                title: 'Pesquisa',
                items: [
                    {
                        xtype: 'textfield',
                        id: 'tfPlaca',
                        label: 'Placa'
                    },
                    {
                        xtype: 'textfield',
                        disabled: true,
                        label: 'Para consulta detalhada informe também o Renavam',
                        labelWidth: '100%',
                        labelWrap: true
                    },
                    {
                        xtype: 'numberfield',
                        id: 'tfRenavam',
                        label: 'Renavam'
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