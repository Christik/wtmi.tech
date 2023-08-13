module.exports.register = function (handlebars) {
    handlebars.registerHelper('every', function(every, context, options) {
        let result = '';
        let subContext = [];

        if (context && context.length > 0) {
            for (let i = 0; i < context.length; i++) {
                if (i > 0 && i % every === 0) {
                    result += options.fn(subContext);
                    subContext = [];
                }
                subContext.push(context[i]);
            }
            result += options.fn(subContext);
        }

        return result;
    });

    handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
        return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
    });

    handlebars.registerHelper('ifNotEquals', function(arg1, arg2, options) {
        return (arg1 == arg2) ? options.inverse(this) : options.fn(this);
    });

    handlebars.registerHelper('ifOr', function(arg1, arg2, options) {
        return (arg1 || arg2) ? options.fn(this) : options.inverse(this);
    });
};
