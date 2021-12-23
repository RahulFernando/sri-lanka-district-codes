const districts = require('./data/districts').districts

function readDistricts() {
    if (districts) {
        return districts;
    }

    return null;
};

module.exports = readDistricts