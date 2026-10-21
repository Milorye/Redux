import { useDispatch, useSelector } from 'react-redux'
import AddTask from './components/AddTask'
import ListTask from './components/ListTask'
import { setFilter } from './features/tasks/tasksSlice'
import './App.css'

function App() {
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.tasks.tasks)
  const filter = useSelector((state) => state.tasks.filter)

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') return task.isDone
    if (filter === 'not-done') return !task.isDone
    return true
  })

  return (
    <div className="todo-app">
      <div className="todo-card">
        <h1>ToDo App</h1>

        <AddTask />

        <div className="filter-bar" aria-label="Task filters">
          <button
            type="button"
            className={filter === 'all' ? 'active' : ''}
            onClick={() => dispatch(setFilter('all'))}
          >
            All
          </button>
          <button
            type="button"
            className={filter === 'done' ? 'active' : ''}
            onClick={() => dispatch(setFilter('done'))}
          >
            Done
          </button>
          <button
            type="button"
            className={filter === 'not-done' ? 'active' : ''}
            onClick={() => dispatch(setFilter('not-done'))}
          >
            Not Done
          </button>
        </div>

        <ListTask tasks={filteredTasks} />
      </div>
    </div>
  )
}

export default App
