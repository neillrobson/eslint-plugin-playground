module.exports = {
    meta: {
        type: 'suggestion',
        fixable: 'code'
    },
    create(context) {
        const template =
            context.parserServices.getTemplateBodyTokenStore && context.parserServices.getTemplateBodyTokenStore();

        return context.parserServices.defineTemplateBodyVisitor({
            'VElement[name=highcharts]'(node) {
                const firstToken = template.getFirstToken(node);

                context.report({
                    node,
                    message: "Use Pendo's sanitized-highcharts component instead.",
                    fix: (fixer) =>
                        fixer.replaceTextRange([firstToken.range[0] + 1, firstToken.range[1]], 'sanitized-highcharts')
                });
            }
        });
    }
};
