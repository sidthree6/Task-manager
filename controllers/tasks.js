const getAllTasks = (req, res) => {
    res.send("Get all tasks")
}

const createTask = (req, res) => {
    res.send("Create a task")
}

const getTask = (req, res) => {
    res.send("Get a single Task")
}

const updateTask = (req, res) => {
    res.send("Update a task")
}

const delteTask = (req, res) => {
    res.send("Delete task")
}

module.exports = {
    getAllTasks, createTask, getTask, updateTask, delteTask
}