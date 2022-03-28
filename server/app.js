const express = require('express');
const connectDB = require('./database/db');
let cors = require('cors');

const people = require('./api/people');

const app = express();

// Connect Database
connectDB();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

app.use('/api/people', people);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`App running on port http://localhost:${port}`));