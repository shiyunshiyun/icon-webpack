// let req = require.context('./alisports-console-svgs', true, /\.svg$/);
let req = require.context('./alisports-studio', true, /\.svg$/);
// let req = require.context('./svg-symbols', true, /\.svg$/);
// let req = require.context('./easycost-svg-symbols', true, /\.svg$/);
req.keys().map(req);
