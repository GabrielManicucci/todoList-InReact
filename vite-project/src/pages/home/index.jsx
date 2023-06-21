
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import axios from 'axios'

import AddTasks from "../../components/addTasks"
import "./styles.css"
import FatherTask from "../../components/FatherTask"
import Header from "../../components/header";
import InfoTask from '../../components/taskInfo'

import { v4 as uuidv4 } from 'uuid';
import Footer from "../../components/footer"



export default function Home() {

  const [tasks, setTasks] = useState([])

  useEffect( () => {
    const handleApi = async () => {
      const response = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10')
      const data = response.data
      console.log(data)

      setTasks(data)
    }

    handleApi()
  }, [])
  
  // conclusion task
  function handleTaskClick(taskId) {
    const newTasks = tasks.map( task => {
      if (taskId === task.id) return { ... task, completed: !task.completed }

      return task
    })

    setTasks(newTasks)
  }

  // add new task
  function handleTaskAddition(taskTitle) {
    const newTasks = [... tasks, {
      id: uuidv4(),
      title: taskTitle,
      completed: false
    }]

    setTasks(newTasks)
  }

  // delete task
  function handleTaskDeletion(taskId) {
    const newTasks = tasks.filter( task => task.id !== taskId )

    setTasks(newTasks)

    // tasks.forEach( task => {
    //   if (taskId === task.id) console.log(task.id)
    // })
  }

  
  return (
    <Router>
      <div className="home">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <AddTasks handleTaskAddition={handleTaskAddition}/>
              <FatherTask 
                tasks={tasks} 
                handleTaskClick={handleTaskClick}   
                handleTaskDeletion={handleTaskDeletion} 
              />
            </>}
          />

          <Route path="/:taskTitle" element={ <InfoTask /> } />
        </Routes>
      </div>

      <Footer />
    </Router>
  )
}