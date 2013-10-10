Ext.define('GTTrans.store.MultaStore', {
    extend      : 'Ext.data.Store',
    
    requires : [
        'GTTrans.model.VHistoricomultas',
        'GTTrans.model.VHistoricomultasID'
    ],
    
    config : {
        storeId     : 'multaStore',
        model       : 'GTTrans.model.VHistoricomultas',
        pageSize    : -1
    }
});