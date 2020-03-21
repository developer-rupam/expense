const DEVELOPMENTOBJ = {url : 'http://localhost:3000',api : ''};
const PRODUCTIONOBJ = {url : '',api : ''};

export const mode = "dev" //dev : development; prod : production

if(mode == 'dev'){
    var url = DEVELOPMENTOBJ.url;
    var api = DEVELOPMENTOBJ.api;
}else{
    var url = PRODUCTIONOBJ.url;
    var api = PRODUCTIONOBJ.api;
}

export const ADDR = url;
export const WEBSERVICE = api;

export const SITENAME = 'EXPENSE';
export const SITENAMEALIAS = 'expense_portral';