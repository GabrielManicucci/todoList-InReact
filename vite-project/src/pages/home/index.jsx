
import { useState } from "react"
import AddTasks from "../../components/addTasks"
import "./styles.css"
import FatherTask from "../../components/FatherTask"

import { v4 as uuidv4 } from 'uuid';



export default function Home() {

  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      title: 'estudar programação',
      completed: false
    },
    {
      id: uuidv4(),
      title: 'trabalhar',
      completed: false
    },
  ])

  function handleTaskClick(taskId) {
    const newTasks = tasks.map( task => {
      if (taskId === task.id) return { ... task, completed: !task.completed }

      return task
    })

    setTasks(newTasks)
  }

  function handleTaskAddition(taskTitle) {
    const newTasks = [... tasks, {
      id: uuidv4(),
      title: taskTitle,
      completed: false
    }]

    setTasks(newTasks)
  }

  function handleTaskDeletion(taskId) {
    const newTasks = tasks.filter( task => task.id !== taskId )

    setTasks(newTasks)

    // tasks.forEach( task => {
    //   if (taskId === task.id) console.log(task.id)
    // })
  }

  
  return (
    <div className="home">
      <AddTasks handleTaskAddition={handleTaskAddition} />
      <FatherTask 
        tasks={tasks} 
        handleTaskClick={handleTaskClick}   
        handleTaskDeletion={handleTaskDeletion} 
      />
    </div>
  )
}