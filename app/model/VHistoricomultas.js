Ext.define('GTTrans.model.VHistoricomultas', {
    extend: 'Ext.data.Model',

    /*uses: [
        'GTTrans.model.VHistoricomultasID'
    ],
*/
    config: {
        /*hasOne: {
            associatedName: 'id',
            model: 'GTTrans.model.VHistoricomultasID'
        },*/
        fields: [
            {
                name: 'cdSerie',
                type: Ext.data.Types.STRING
            },
            {
                name: 'dsSerie',
                type: Ext.data.Types.STRING
            },
            {
                name: 'nrConvenio',
                type: Ext.data.Types.INTEGER
            },
            {
                name: 'cdEspecie',
                type: Ext.data.Types.STRING
            },
            {
                name: 'nrConta',
                type: Ext.data.Types.STRING
            },
            {
                name: 'nrAit',
                type: Ext.data.Types.STRING
            },
            {
                name: 'ait',
                type: Ext.data.Types.STRING
            },
            {
                name: 'dtAit',
                type: Ext.data.Types.STRING
            },
            {
                name: 'hrAit',
                type: Ext.data.Types.STRING
            },
            {
                name: 'nrPlaca',
                type: Ext.data.Types.STRING
            },
            {
                name: 'sgUfplaca',
                type: Ext.data.Types.STRING
            },
            {
                name: 'dtLimitedefesa',
                type: Ext.data.Types.STRING
            },
            {
                name: 'dsLocal',
                type: Ext.data.Types.STRING
            },
            {
                name: 'dsComplemento',
                type: Ext.data.Types.STRING
            },
            {
                name: 'cdCategoria',
                type: Ext.data.Types.INTEGER
            },
            {
                name: 'nrArnait',
                type: Ext.data.Types.STRING
            },
            {
                name: 'nrArnap',
                type: Ext.data.Types.STRING
            },
            {
                name: 'nmProprietario',
                type: Ext.data.Types.STRING
            },
            {
                name: 'nmLogradouroprop',
                type: Ext.data.Types.STRING
            },
            {
                name: 'nrLogradouroprop',
                type: Ext.data.Types.STRING
            },
            {
                name: 'dsComplementoprop',
                type: Ext.data.Types.STRING
            },
            {
                name: 'nrCepprop',
                type: Ext.data.Types.INTEGER
            },
            {
                name: 'nrMunicipioprop',
                type: Ext.data.Types.INTEGER
            },
            {
                name: 'nmBairroprop',
                type: Ext.data.Types.STRING
            },
            {
                name: 'sgUfprop',
                type: Ext.data.Types.STRING
            },
            {
                name: 'cdRenainf',
                type: Ext.data.Types.INTEGER
            },
            {
                name: 'nrRenavan',
                type: Ext.data.Types.STRING
            },
            {
                name: 'cdMarcadetran',
                type: Ext.data.Types.STRING
            },
            {
                name: 'cdEspeciedetran',
                type: Ext.data.Types.STRING
            },
            {
                name: 'nmProprietarioveiculo',
                type: Ext.data.Types.STRING
            },
            {
                name: 'dsMarcadetran',
                type: Ext.data.Types.STRING
            },
            {
                name: 'dsEspeciedetran',
                type: Ext.data.Types.STRING
            },
            {
                name: 'vlApagar',
                type: Ext.data.Types.STRING
            },
            {
                name: 'vlPago',
                type: Ext.data.Types.STRING
            },
            {
                name: 'dtPagamento',
                type: Ext.data.Types.STRING
            },
            {
                name: 'dtVencimento',
                type: Ext.data.Types.STRING
            },
            {
                name: 'nrGuia',
                type: Ext.data.Types.STRING
            },
            {
                name: 'dsEnquadramento',
                type: Ext.data.Types.STRING
            },
            {
                name: 'cdEnquadramento',
                type: Ext.data.Types.STRING
            },
            {
                name: 'dsLei',
                type: Ext.data.Types.STRING
            },
            {
                name: 'nrPonto',
                type: Ext.data.Types.STRING
            },
            {
                name: 'vlPonto',
                type: Ext.data.Types.STRING
            },
            {
                name: 'nrLote',
                type: Ext.data.Types.STRING
            },
            {
                name: 'dtNait',
                type: Ext.data.Types.STRING
            },
            {
                name: 'dtNap',
                type: Ext.data.Types.STRING
            },
            {
                name: 'stDefesa',
                type: Ext.data.Types.STRING
            },
            {
                name: 'stRecursojari',
                type: Ext.data.Types.STRING
            },
            {
                name: 'stRecursocetran',
                type: Ext.data.Types.STRING
            },
            {
                name: 'dsCategoria',
                type: Ext.data.Types.STRING
            },
            {
                name: 'nrAgente',
                type: Ext.data.Types.STRING
            },
            {
                name: 'nrAgentevalidador',
                type: Ext.data.Types.STRING
            }
        ],
        
        proxy : {
            type                : 'ajax',
            url                 : 'http://10.1.3.49:8080/gttrans/ws/multa/consulta',
            //url                 : 'http://localhost:8080/gttrans/ws/multa/consulta',
            //url                 : 'http://www.belem.pa.gov.br/gttrans/ws/multa/consulta',

            reader : {
                reader	: 'json',
                root	: ''
            }
        }
    }
});