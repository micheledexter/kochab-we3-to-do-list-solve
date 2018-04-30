const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const taskRouter = require('./routes/task.route');

require('./modules/database.connection');

// serve static files
app.use(bodyParser.json());
app.use(express.static('server/public'));

// Routes
app.use('/task', taskRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});