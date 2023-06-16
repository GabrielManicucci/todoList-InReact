
import { useState } from "react"
import AddTasks from "../../components/addTasks"
import "./styles.css"
import FatherTask from "../../components/FatherTask"



export default function Home() {

  const [tasks, setTasks] = useState([
    {
      id: Math.random(10),
      title: 'estudar programação',
      completed: false
    },
    {
      id: Math.random(10),
      title: 'trabalhar',
      completed: false
    },
    {
      id: Math.random(10),
      title: 'trabalhar',
      completed: false
    },
    {
      id: Math.random(10),
      title: 'trabalhar',
      completed: false
    },
  ])

  
  return (
    <div className="home">
      <AddTasks />
      <FatherTask tasks={tasks} />
    </div>
  )
}