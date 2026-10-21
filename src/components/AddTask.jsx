import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../features/tasks/tasksSlice'

function AddTask() {
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmedText = description.trim()

    if (!trimmedText) return

    dispatch(addTask({ description: trimmedText }))
    setDescription('')
  }

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Add a new ToDo"
        aria-label="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  )
}

export default AddTask
