const express = require('express')
const morgan = require('morgan')

const { notFound, errorHandler } = require('./middlewares');

const app = express();

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Community API! 🌈 💚'
    });
})

app.use(notFound);
app.use(errorHandler);

app.listen(3000, () =>
    console.log('Forum API is listening on port 3000!'),
);