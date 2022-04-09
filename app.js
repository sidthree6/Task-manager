require('./db/connect')
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

// Middleware
app.use(express.json());

// Route
app.get('/hello', (req, res) => {
    res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks)

// app.get('/api/v1/tasks') get all tasks
// app.post('/api/v1/tasks') create new task
// app.get('/api/v1/tasks/:id') create a single task
// app.patch('/api/v1/tasks/:id') update a task
// app.delete(/api/v1/tasks/:id') delete a task

const port = 3000;

app.listen(port, console.log(`Server is listening to port ${port}`));