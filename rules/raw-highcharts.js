module.exports = {
    meta: {
        type: 'suggestion',
        fixable: 'code',
        messages: {
            useSanitized: "Use Pendo's sanitized-highcharts component instead."
        }
    },
    create(context) {
        const template =
            context.parserServices.getTemplateBodyTokenStore && context.parserServices.getTemplateBodyTokenStore();

        return context.parserServices.defineTemplateBodyVisitor({
            'VElement[name=highcharts]'(node) {
                context.report({
                    node,
                    messageId: 'useSanitized',
                    fix: (fixer) => {
                        const firstToken = template.getFirstToken(node);
                        const fixes = [
                            fixer.replaceTextRange(
                                [firstToken.range[0] + 1, firstToken.range[1]],
                                'sanitized-highcharts'
                            )
                        ];

                        if (node.endTag) {
                            fixes.push(fixer.replaceText(node.endTag, '</sanitized-highcharts>'));
                        }

                        return fixes;
                    }
                });
            }
        });
    }
};
