import Task from './Task'

function ListTask({ tasks }) {
  if (tasks.length === 0) {
    return <p className="empty-state">No tasks in this view.</p>
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  )
}

export default ListTask
