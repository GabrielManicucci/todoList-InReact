import { useState } from "react";
import Button from "../Button";
import './styles.css'


export default function AddTasks({handleTaskAddition}) {

  const [inputData, setInputData] = useState('')

  function handleInputData(data) {
    setInputData(data)
    console.log(inputData)
  }

  function handleAddtaskClick() {
    handleTaskAddition(inputData)
    console.log(inputData)
    setInputData('')
  }
  
  return (
    <div className="addTasks">
       <div className="div-add-task-input">
          <input 
            type="text" 
            name="" 
            id=""     
            className="add-task-input"
            onChange={ e => handleInputData(e.target.value)}
            value={inputData}
          />
      </div>

      <div className="div-add-task-button">
        <Button onClick={handleAddtaskClick}>Adicionar</Button>
      </div>
    
    </div>
   
  )
}