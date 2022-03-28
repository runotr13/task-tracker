import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import Tasks from "./components/Tasks";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [inputValueHeader, setInputValueHeader] = useState();
  const [inputValuep, setInputValuep] = useState();
  const [task, setTask] = useState([
    {
      id: uuidv4(),
      taskInput : "Dentist Appointment",
      date : "Apr 8th at 10:30am"
    },
    {
      id: uuidv4(),
      taskInput : "Dentist Appointment",
      date : "Apr 8th at 10:30am"
    }, 
    
  ]);

  return (
    <div className="App">
      <Header
        task={task}
        inputValuep={inputValuep}
        inputValueHeader={inputValueHeader}
        setInputValueHeader={setInputValueHeader}
        setInputValuep={setInputValuep}
        setTask={setTask}
      />
      <Tasks 
      task={task}
      setTask={setTask}
      />
    </div>
  );
}

export default App;

/*const [tasks, setTasks] = useState([
  {
    id: 1,
    text: "Study React Pre-Class Notes",
    day: "Dec 12th at 2:30pm",
  },
])
const adddTask = (newTask) => {
  // console.log("Add Task From App.js");
  const id = Math.floor(Math.random() * 100) + 1;
  const addNewTask = { id, ...newTask };
  setTasks([...tasks, addNewTask]);
};
console.log(tasks)*/
