//@require @packageOverrides
Ext.Loader.setConfig({

});

Ext.application({
    name: 'GTTrans',
            
    viewport: {
        autoMaximize: true
    },
            
    requires: [
        'Ext.MessageBox'
    ],
            
    views: [
        'MainView'
    ],
            
    controllers: [
        'HomeController',
        'PesquisaController'
    ],
            
    models: [
        'VHistoricomultasID',
        'VHistoricomultas'
    ],
            
    stores: [
        'MultaStore'
    ],
            
    isIconPrecomposed: true,
    
    launch: function() {
        //Date Translation
        Ext.Date.monthNames = [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro'
        ];

        Ext.Date.defaultFormat = 'd/m/Y';

        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.create('GTTrans.view.MainView', {fullscreen: true});

        //Dismiss the splash screen
        //navigator.splashscreen.hide();
    },
            
    onUpdated: function() {
        Ext.Msg.confirm(
                "Application Update",
                "This application has just successfully been updated to the latest version. Reload now?",
                function(buttonId) {
                    if (buttonId === 'yes') {
                        window.location.reload();
                    }
                }
        );
    }
});