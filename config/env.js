// import {DEV_BACKEND_URL, PROD_BACKEND_URL} from '@env';

const devEnviromentVariables = {
     // BACKEND_URL: DEV_BACKEND_URL,
     BACKEND_URL: 'http://api.vanhiep.net/api/',
     
}

const prodEnviromentVariables = {
     // BACKEND_URL: PROD_BACKEND_URL,
     BACKEND_URL: 'http://api.vanhiep.net/api/',
}


export default __DEV__?devEnviromentVariables:prodEnviromentVariables;