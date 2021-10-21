// https://stackoverflow.com/questions/63067555/how-to-make-an-import-shortcut-alias-in-create-react-app

const path = require(`path`);

module.exports = {
    webpack: {
        alias: {
            '@assets': path.join(path.resolve(__dirname, './src', 'assets')),
            '@api': path.join(path.resolve(__dirname, './src', 'api')),
        }
    },
    style: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
}