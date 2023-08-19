const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: 'http://localhost:4200/',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
};

app.use(cors(corsOptions));

const port = 7178;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
