requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        jquery : 'jquery',
        bootstrap: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS',
        react: 'https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react.js',
        reactdom: 'https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react-dom.js',
        babel: 'https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js',
        marked: 'https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.5/marked.min.js',
        d3: 'https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.16/d3.min.js'
    }
});

requirejs(['app/main']);