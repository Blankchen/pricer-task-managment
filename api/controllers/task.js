const AppError = require("../utils/appError");
const taskService = require("../services/task");

exports.getAllTask = async (req, res, next) => {
  try {
    const data = await taskService.getAll();
    res.json(data);
  } catch (error) {
    return next(new AppError(err, 400));
  }
};

exports.createTask = async (req, res, next) => {
  if (!req.body) return next(new AppError("No form data found", 404));
  try {
    const { name, status } = req.body;
    const data = await taskService.create({ name, status });
    res.status(201).json(data);
  } catch (err) {
    return next(new AppError(err, 400));
  }
};

exports.getTask = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new AppError("No task id found", 404));
  }
  try {
    const data = await taskService.getById(id);
    res.json(data);
  } catch (err) {
    return next(new AppError(err, 400));
  }
};

exports.updateTask = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new AppError("No task id found", 404));
  }
  try {
    const { status } = req.body;
    const data = await taskService.update(id, { status });
    res.json(data);
  } catch (err) {
    return next(new AppError(err, 400));
  }
};

exports.deleteTask = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new AppError("No task id found", 404));
  }
  try {
    const data = await taskService.delete(id);
    res.json(data);
  } catch (err) {
    return next(new AppError(err, 400));
  }
};
