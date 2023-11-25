// server.js
const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3001;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'danbi0519',
    database: 'foodmap',
});

app.get('/api/data', (req, res) => {
    connection.query('SELECT * FROM Users', (error, results, fields) => {
        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(results);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
