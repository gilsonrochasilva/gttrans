/*
 * File: app/view/HomeView.js
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

Ext.define('GTTrans.view.HomeView', {
    extend: 'Ext.Panel',

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
            {
                xtype: 'button',
                id: 'btSair',
                margin: '10px 0 0 0',
                ui: 'decline',
                width: '75%',
                text: 'Sair'
            }
        ]
    }

});