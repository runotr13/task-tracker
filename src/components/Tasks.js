import React ,{useState}from 'react'

const Tasks = ({task,setTask}) => {
    /* setTask([...task, {
        taskInput : "Dentist Appointment",
        date : "Apr 8th at 10:30am"
    }]) */

    const [style,setStyle] = useState(false)
    const colClick = (e) => {
        setStyle(!style)
        if(style === false){
            e.target.style.textDecoration = "line-through"
        }else{
            e.target.style.textDecoration = "none"
        }
    }
    const btnClick = (e) => {
        e.target.parentElement.parentElement.remove()
        task.length--
        if(task.length <1){
            alert('Task to empty')
        }
    }
    

return (
    <>
<div className="container" style={{cursor:"pointer"}}>
    {
    
        task.map((item) => (
                
            <div className="row  p-3 ">
        <div className="col bg-white ps-3 pt-2 text-start " onClick={(e) => {colClick(e)}}  >
            <h5>{item.taskInput}</h5>
            <p className="fst-italic">{item.date}</p>
        </div>
        <div className="col bg-white pt-2 text-end " style={{cursor:"pointer"}} >
        <button className="btn btn-close btn-warning" type='reset' onClick={(e) => {btnClick(e)}}></button>
        </div>
    </div>
        ))
    }
</div>  
</>
)
}

export default Tasks