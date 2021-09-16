const utils = require('eslint-plugin-vue/lib/utils');

module.exports = {
    rules: {
        "no-raw-highcharts": {
            create(context) {
                const template =
                    context.parserServices.getTemplateBodyTokenStore &&
                    context.parserServices.getTemplateBodyTokenStore()

                // ----------------------------------------------------------------------
                // Public
                // ----------------------------------------------------------------------

                return utils.defineTemplateBodyVisitor(context, {
                    'VElement[name=highcharts]'(node) {
                        const firstToken = template.getFirstToken(node);

                        context.report({
                            node,
                            message: "Neill says: use Pendo's sanitized-highcharts component instead.",
                            fix: (fixer) => fixer.replaceTextRange([firstToken.range[0] + 1, firstToken.range[1]], 'sanitized-highcharts')
                        })
                    }
                })
            }
        }
    }
};
