'use strict';

const blacklist = require('metro-bundler/src/blacklist');

const config = {
    getBlacklistRE() {
        return blacklist([
            /\.idea[\/\\].*/,
        ]);
    },

    getSourceExts() {
        return ['js', 'json', 'ts', 'tsx'];
    },

    getTransformModulePath(foo){
        return require.resolve('./src/utils/ts-transformer');
    }
};

module.exports = config;