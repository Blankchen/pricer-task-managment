const TaskModel = require("../models/task");

exports.getAll = async () => {
  return await TaskModel.findAll({
    attributes: ['id', 'name', 'status'],
    order: [
      ['createdAt', 'DESC'],
    ]
  })
}

exports.getById = async (id) => {
  return await TaskModel.findByPk(id)
}

exports.create = async (taskDTO) => {
  return await TaskModel.create(taskDTO)
}

exports.update = async (id, taskDTO) => {
  return await TaskModel.update(taskDTO, {
    where: { id }
  })
}

exports.delete = async (id) => {
  return await TaskModel.destroy({
    where: { id }
  })
}