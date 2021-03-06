export const config = {
    PORT: process.env.PORT && parseInt(process.env.PORT, 10) || 10805,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DEBUG_LEVEL: process.env.DEBUG_LEVEL || 'debug',

    VERIFY_CLIENT_TAG: process.env.VERIFY_CLIENT_TAG || false,

    SEACAT_ENDPOINT: process.env.SEACAT_ENDPOINT,
    SEACAT_USERNAME: process.env.SEACAT_USERNAME,
    SEACAT_PASSWORD: process.env.SEACAT_PASSWORD,

    AUTHENTICATOR: process.env.ZSCANNER_AUTHENTICATOR || 'none',
    DOCUMENT_STORAGE: process.env.ZSCANNER_STORAGE || 'demo',

    ROUTER_PREFIX: process.env.ROUTER_PREFIX || '/api-zscanner',
};
