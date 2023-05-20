const AppError = require("../utils/appError");
const conn = require("../services/db");


exports.getAllTask = (req, res, next) => {
  conn.query("SELECT * FROM task ORDER BY created_at DESC", function (err, data, fields) {
    if (err) return next(new AppError(err));
    data = data.map(x => {
      return {
        ...x,
        checked: x.status === 'completed'
      }
    })
    res.status(200).json({
      status: "success",
      length: data?.length,
      data: data,
    });
  });
};

exports.createTask = (req, res, next) => {
  if (!req.body) return next(new AppError("No form data found", 404));
  const values = [req.body.name, "pending"];
  conn.query(
    "INSERT INTO task (name, status) VALUES(?)",
    [values],
    function (err, data, fields) {
      if (err) return next(new AppError(err, 500));
      res.status(201).json({
        status: "success",
        message: "task created!",
      });
    }
  );
};

exports.getTask = (req, res, next) => {
  if (!req.params.id) {
    return next(new AppError("No task id found", 404));
  }
  conn.query(
    "SELECT * FROM task WHERE id = ?",
    [req.params.id],
    function (err, data, fields) {
      if (err) return next(new AppError(err, 500));
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    }
  );
};

exports.updateTask = (req, res, next) => {
  if (!req.params.id) {
    return next(new AppError("No task id found", 404));
  }
  const status = req.body.checked === 'false' ? 'completed': 'pending'
  conn.query(
    "UPDATE task SET status=? WHERE id=?",
    [status, req.params.id],
    function (err, data, fields) {
      if (err) return next(new AppError(err, 500));
      res.status(201).json({
        status: "success",
        message: "task updated!",
      });
    }
  );
};

exports.deleteTask = (req, res, next) => {
  if (!req.params.id) {
    return next(new AppError("No task id found", 404));
  }
  conn.query(
    "DELETE FROM task WHERE id=?",
    [req.params.id],
    function (err, fields) {
      if (err) return next(new AppError(err, 500));
      res.status(201).json({
        status: "success",
        message: "task deleted!",
      });
    }
  );
};
