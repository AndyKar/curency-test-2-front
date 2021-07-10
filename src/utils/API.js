import axios from "axios";

let apiHeaders = {}
let Url = '/index.php?route=api/react/v1/'
const api_token = 'OCKOPqwe6QE0jboU8TwJpf7YmQx7Dn0AdGz01jdxjOrIJPYV6cie8wPsBNwKkZfbhkkXJPtJl5rQdhPJ8OsirBaIi1yrFTFd3kWP3XA5xxB5rLparmvLzcoilrkDe4QDbV2lWTBuPL83GHQziNR6j32yP1Y7em1hm0mVovOnHIbfxAtcSS1MQMuAuKDUXYpLmbCYxIROigPhGMJnqnTYqboqqGMUNP5xWlW1Wb4wWIBXQEIEqhzjvaG0VT1zWmlW'
apiHeaders = {
    'Access-Control-Allow-Origin': 'http://' + window.location.host,
    'Access-Control-Allow-Credentials': true
}
if(window.location.host=== 'curency.git:3000'){
    Url = '//curency.git/index.php?route=api/react/v1/'
}

const API = axios.create({
    baseURL: Url,
    params: {
        part: 'part',
        maxResults: 5,
        key: 'key'
    },
    withCredentials: true,
    headers: apiHeaders,
    responseType: "json",

})

API.interceptors.request.use((config) => {
    config.headers = config.params || {}
    config.headers = {
        'Access-Control-Allow-Origin': 'http://' + window.location.host,
        'Access-Control-Allow-Credentials': true
    }
    config.params = config.params || {};
    config.params['api_token'] = api_token;
    return config;
})

export default API