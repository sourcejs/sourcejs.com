// User options for overriding core options.js

module.exports = {
    // Restart app after changing core options
    core: {
    },

    // Run `grunt` after changing assets options. Or use`grunt watch-all`.
    assets: {
        modulesEnabled : {
            // Overriding example
            // trimSpaces: true
        },

        modulesOptions : {
            // Modules options example
            // innerNavigation : {
            //   hashSymb: '!'
            //   }
        },

        // Plugins
        pluginsEnabled : {
            // user/plugins/counter/counter.js enabling example
            // 'counter/counter': true
        },

        pluginsOptions : {
            // Plugins options example
            // somePlugin : {
            //     someOption: true
            // }
        }
    }
};