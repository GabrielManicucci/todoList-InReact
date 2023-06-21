import './styles.css'

import { CgClose, CgInfo } from 'react-icons/cg'
import { Link } from 'react-router-dom'

export default function Task({task, handleTaskClick, handleTaskDeletion}) {

  return (
    <div 
    className="task" 
    style={ task.completed ? {borderLeft: '6px solid chartreuse'} : {} }
    
    >
      <div className="task-content">
        <p onClick={() => handleTaskClick(task.id)}>{task.title}</p>

        <div className="buttons">
          <Link to={`/${task.title}`}>
            <button>
              <CgInfo />
            </button>
          </Link>
         
          <button onClick={ () => handleTaskDeletion(task.id)} >
          <CgClose />
          </button>
        </div>
        
      </div>
    </div>
  )
}