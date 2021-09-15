module.exports = {
    rules: {
        "no-template-literals": {
            create: context => {
                return {
                    TemplateLiteral(node) {
                        context.report(node, 'Neill says: do not use template literals');
                    }
                };
            }
        }
    }
};
