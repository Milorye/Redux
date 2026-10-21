import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { editTask, toggleTask } from '../features/tasks/tasksSlice'

function Task({ task }) {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [editedText, setEditedText] = useState(task.description)

  useEffect(() => {
    setEditedText(task.description)
  }, [task.description])

  const saveEdit = () => {
    const trimmedText = editedText.trim()

    if (!trimmedText) return

    dispatch(editTask({ id: task.id, description: trimmedText }))
    setIsEditing(false)
  }

  return (
    <li className={`task-item ${task.isDone ? 'done' : ''}`}>
      <label className="task-main">
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={() => dispatch(toggleTask(task.id))}
        />

        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(event) => setEditedText(event.target.value)}
            className="task-input"
            aria-label={`Edit task ${task.id}`}
          />
        ) : (
          <span className="task-description">{task.description}</span>
        )}
      </label>

      <div className="task-actions">
        {isEditing ? (
          <>
            <button type="button" onClick={saveEdit} className="save-btn">
              Save
            </button>
            <button type="button" onClick={() => setIsEditing(false)} className="cancel-btn">
              Cancel
            </button>
          </>
        ) : (
          <button type="button" onClick={() => setIsEditing(true)} className="edit-btn">
            Edit
          </button>
        )}
      </div>
    </li>
  )
}

export default Task
