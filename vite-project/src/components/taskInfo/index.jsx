import { Link, useParams } from 'react-router-dom'
import Button from '../button'
import './styles.css'


export default function infoTask() {
  const params = useParams()
  console.log(params)


  return (
    <div className="infoTask">
      <Link to={'/'}>
        <Button>Voltar</Button>
      </Link>
      
      <div className="infoTask-content">
        <h2> {params.taskTitle} </h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, voluptatibus. Voluptatem aliquam explicabo dolore enim corporis eum delectus doloribus, natus tempora inventore placeat voluptates. Laudantium beatae magnam corrupti non magni.</p>
      </div>
    </div>
  )
}