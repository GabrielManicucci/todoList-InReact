import './styles.css'

export default function Task({task, handleTaskClick, handleTaskDeletion}) {
  // console.log(task.id)

  return (
    <div 
    className="task" 
    style={ task.completed ? {borderLeft: '6px solid chartreuse'} : {} }
    
    >
      <div className="task-content">
        <p onClick={() => handleTaskClick(task.id)}>{task.title}</p>
        <button onClick={ () => handleTaskDeletion(task.id)} > X </button>

      </div>
    </div>
  )
}