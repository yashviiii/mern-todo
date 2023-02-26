import Task from '../models/tasks.js';

export const createTasks = async(req,res,next)=>{
    try{
        const newTask = new Task({
            title: req.body.title,
            desc: req.body.desc,
            completed: req.body.completed
        });
        const savedTask = await newTask.save();
        return res.status(201).json(newTask)
    }
    catch(err){
        return res.json(`error ${err}`);
    }
}

export const getAllTasks = async(req,res,next)=>{
    try{
        const tasks = await Task.find({});
        return res.status(200).json(tasks);
    }catch(err){
        res.json(`error ${err}`)
    }
}

export const updateTask = async(req,res,next) => {
    try{
    const task = await Task.findById(req.params.taskId).exec();
    if(!task) return res.json('no task found');

    const updatedTask = await Task.findByIdAndUpdate(req.params.taskId, {
        title: req.body.title,
        desc: req.body.desc,
        completed: req.body.completed,
    },{new:true});

    return res.status(200).json(updatedTask);
    }catch(err){
        return res.json(`error ${err}`);
    }
}

export const deleteTask = async(req,res,next) => {
    try{
        const task = await Task.findById(req.params.taskId).exec();
        if(!task) return res.json('no task found');

        await Task.findByIdAndDelete(req.params.taskId);
        return res.status(200).json('deleted task');
    }catch(err){
        return res.json(`error ${err}`);
    }
}