const { override, addBabelPlugins } = require('customize-cra')

// добавляем бейбл плагинов, при создании проекта с create-react-app

module.exports = override(
    addBabelPlugins(
        // '@babel/plugin-proposal-nullish-coalescing-operator',
        // '@babel/plugin-syntax-optional-chaining',
        'babel-plugin-styled-components'
    )
)
