var command = `
    git tag -a -f v\${nextRelease.version} "v\${nextRelease.version}" -F CHANGELOG.md
    git push origin "v\${nextRelease.version}"
`;

var config = require('semantic-release-preconfigured-conventional-commits');

config.plugins.push(["@semantic-release/exec", { publishCmd: command }],
    "@semantic-release/github",
    "@semantic-release/git",
)
config.branches.push(["main"]);
module.exports = config;
