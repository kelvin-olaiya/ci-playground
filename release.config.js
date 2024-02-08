var command = `
    echo "FIGL' a BUCCHIN`;

var config = require('semantic-release-preconfigured-conventional-commits');

config.plugins.push(["@semantic-release/exec", { prepareCmd: command }],
    "@semantic-release/github",
    "@semantic-release/git",
)
module.exports = config;
