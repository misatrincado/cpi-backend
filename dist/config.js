"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV = void 0;
exports.ENV = 'development';
const DB_DEV = {
    DB: {
        host: 'localhost',
        username: 'sa',
        password: 'Wallet2020',
        database: 'cpi',
        port: 1432,
    },
};
const DB_QA = {
    DB: {
        host: '',
        username: '',
        password: '',
        database: '',
        port: 1433,
    },
};
const DB_PROD = {
    DB: {
        host: '',
        username: '',
        password: '',
        database: '',
        port: 1433,
    },
};
const ALL = {};
function handleSend() {
    switch (exports.ENV) {
        case 'development':
            return DB_DEV;
        case 'qa':
            return DB_QA;
        case 'production':
            return DB_PROD;
        default:
            return DB_DEV;
    }
}
exports.default = Object.assign(Object.assign({}, handleSend()), ALL);
//# sourceMappingURL=config.js.map