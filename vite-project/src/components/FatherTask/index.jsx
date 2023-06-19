import './styles.css'
import Task from "../task";


export default function FatherTask( {tasks, handleTaskClick, handleTaskDeletion} ) {
  return (
    <div className="tasks">
      {
        tasks.map( task => {
          if (task.title !== '') {
            return (
              <Task 
                task={task} 
                key={task.id} 
                handleTaskClick={handleTaskClick} 
                handleTaskDeletion={handleTaskDeletion}
              />
            )
          }
        })
      }
    </div>
      
    
  )
}