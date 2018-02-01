//e6 syntax 

const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send({hi});
});

const port = process.env.port || 5000;
app.listen(port);