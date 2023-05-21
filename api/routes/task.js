module.exports = function (app) {
  const controllers = require("../controllers/task");
  const AppError = require("../utils/appError");
  const errorHandler = require("../utils/errorHandler");

  // taskList Routes
  app.route("/task").get(controllers.getAllTask).post(controllers.createTask);

  app
    .route("/task/:id")
    .get(controllers.getTask)
    .put(controllers.updateTask)
    .delete(controllers.deleteTask);

  app.all("*", (req, res, next) => {
    next(new AppError(`The URL ${req.originalUrl} does not exists`, 404));
  });
  app.use(errorHandler);
};
