import Button from "../Button";
import './styles.css'


export default function AddTasks() {
  return (
    <div className="addTasks">
       <div className="div-add-task-input">
          <input 
            type="text" 
            name="" 
            id=""     
            className="add-task-input"
          />
      </div>

      <div className="div-add-task-button">
        <Button>Adicionar</Button>
      </div>
    
    </div>
   
  )
}