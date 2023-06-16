import './styles.css'
import Task from "../task";


export default function FatherTask( {tasks} ) {
  return (
    <div className="tasks">
      {
        tasks.map( task => <Task task={task} /> )
      }
    </div>
      
    
  )
}