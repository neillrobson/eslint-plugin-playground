module.exports = {
    root: true,
    plugins: ['eslint-plugin'],
    extends: ['eslint:recommended', 'plugin:eslint-plugin/recommended', 'plugin:node/recommended', 'prettier'],
    env: {
        node: true
    }
};
