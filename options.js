// User options for overriding core options.js

module.exports = {
    // Restart app after changing core options
    core: {
        common: {
            specFiles: ['index.src', 'index.jsx', 'index.jade', 'index.haml', 'index.md', 'readme.md', 'README.md', 'index.html']
        }
    },

    // Run `grunt` after changing assets options. Or use`grunt watch-all`.
    assets: {
        modulesEnabled : {
            // Overriding example
            // trimSpaces: true
        },

        modulesOptions : {
            search: {
                autoFocusOnNavigationPage: false
            }
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