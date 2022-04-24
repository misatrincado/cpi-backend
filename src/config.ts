export const ENV: 'development' | 'qa' | 'production' = 'development';

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
  switch (ENV) {
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
export default { ...handleSend(), ...ALL };
