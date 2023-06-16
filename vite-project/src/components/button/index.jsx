import './styles.css'

// Componente button reutulizável
 
export default function Button({children, onClick}) {
  return (
    <button onClick={onClick} className="button"> {children} </button>
  )
}