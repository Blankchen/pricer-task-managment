/* global jest beforeAll test expect */
const taskService = require('../../api/services/task')
jest.mock('../../api/models/task')

const TaskModel = require('../../api/models/task')

let service
beforeAll(() => {
  service = taskService
})

test('should fetch all task', async () => {
  const taskList = [{ id: 1, name: 'ADS', status: true }, { id: 2, name: 'info', status: false }]
  TaskModel.findAll.mockResolvedValue(taskList)
  const resp = service.getAll()
  expect(resp).toEqual(taskList)
  expect(service.getAll).toHaveBeenCalledWith({
    attributes: ['id', 'name', 'status']
  })
})