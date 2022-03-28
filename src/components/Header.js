import React,{useState} from 'react'
import AddTask from './AddTask'

const Header = ({task,inputValuep,inputValueHeader,setInputValueHeader,setInputValuep,setTask}) => {
    const [isClick,setClick] = useState(false);
    const handleClick = (e) => {
        setClick(!isClick)
        if(isClick === false){
            e.target.innerText = 'Close add Task Bar'
            e.target.style.backgroundColor = 'red'
        }else{
            e.target.innerText = 'Show Add Task Bar'
            e.target.style.backgroundColor = '#810089'
        }
        }
return (
    <>
        <h1 className="py-4 ">Task Tracker</h1>
        <button className='btn btn-info text-white ' style={{backgroundColor:"#810089"}}  onClick={(e) => {handleClick(e)} }>Show Add Task Bar</button>
        
        {isClick && < AddTask  
        task={task}
        inputValuep={inputValuep}
        inputValueHeader={inputValueHeader}
        setInputValueHeader={setInputValueHeader}
        setInputValuep={setInputValuep}
        setTask={setTask}/>}
        
        
</>
)
}

export default Header