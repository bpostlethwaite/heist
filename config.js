const toml = require('toml');
const fs = require('fs');

module.exports = function() {

    const configPath = process.env.HEIST_CONFIG;

    if (!configPath) {
        throw new Error('HEIST_CONFIG env variable unset or empty');
    }

    const tomlStr = fs.readFileSync(configPath, {encoding: 'utf8'});

    return toml.parse(tomlStr);
};
