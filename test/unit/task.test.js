const taskService = require('../../api/services/task')
jest.mock('../../api/models/task')
const TaskModel = require('../../api/models/task')

describe('Test task', function(){ 

  test('should fetch all task', async () => {
    const taskList = [{ id: 1, name: 'ADS', status: true }, { id: 2, name: 'info', status: false }]
    TaskModel.findAll.mockResolvedValue(taskList)
    const resp = await taskService.getAll()
    expect(resp).toEqual(taskList)
    expect(TaskModel.findAll).toHaveBeenCalledWith({
      attributes: ['id', 'name', 'status'],
      order: [
        ['createdAt', 'DESC'],
      ]
    })
  })

  test('should fetch one task', async () => {
    const task = { id: 1, name: 'ADS', status: true }
    TaskModel.findByPk.mockResolvedValue(task)
    const resp = await taskService.getById(task.id)
    expect(resp).toEqual(task)
    expect(TaskModel.findByPk).toHaveBeenCalledWith(task.id)
  })
  
  test('should create task', async () => {
    const task = { id: 1, name: 'ADS', status: true }
    TaskModel.create.mockResolvedValue(task)
    const resp = await taskService.create(task)
    expect(resp).toEqual(task)
    expect(TaskModel.create).toHaveBeenCalledWith(task)
  })
  
  test('should update task', async () => {
    const task = { id: 1, name: 'ADS', status: true }
    TaskModel.update.mockResolvedValue(task)
    const resp = await taskService.update(task.id, task)
    expect(resp).toEqual(task)
    expect(TaskModel.update).toHaveBeenCalledWith(task, {
      where: { id: task.id }
    })
  })

  test('should delete task', async () => {
    const task = { id: 1, name: 'ADS', status: true }
    TaskModel.destroy.mockResolvedValue(task)
    const resp = await taskService.delete(task.id)
    expect(resp).toEqual(task)
    expect(TaskModel.destroy).toHaveBeenCalledWith({
      where: { id: task.id }
    })
  })

})