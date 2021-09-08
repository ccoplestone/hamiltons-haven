/* eslint-disable */

const fs = require('fs');

const values = ['EXCHANGE_URL', 'GM_API_KEY', 'GTM_KEY'];

fs.writeFileSync(
    './env.js',
    `module.exports = { ${values
        .map((value) => `${value}: '${process.env[value]}'`)
        .join(', ')} };\n`
);
