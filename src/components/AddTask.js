import React from "react";
import { v4 as uuidv4 } from "uuid";


const AddTask = ({
  task,
  inputValuep,
  inputValueHeader,
  setInputValueHeader,
  setInputValuep,
  setTask,
}) => {
/* const [inputValueHeader,setInputValueHeader] = useState()
    const [inputValuep,setInputValuep] = useState()
    const [mehmet,setMehmet] = useState([]) */

const SaveTask = (e) => {
    e.preventDefault();
    setTask([...task, {
    id: uuidv4(),
    taskInput: inputValueHeader,
    date: inputValuep,
    }]);
    setInputValueHeader("")
    setInputValuep("")
};


return (
    <>
    <form action="" onSubmit={SaveTask}>
        <div className="form-floating  p-3">
        <input
            type="text"
            className="form-control"
            id="floatingInputs"
            placeholder="Add Task"
            value={inputValueHeader}
            onChange={(e) => setInputValueHeader(e.target.value)}
            required
        />
        <label for="floatingInputs" className="p-4 fs-5">
            Add Task
        </label>
        </div>
        <div className="form-floating mb-3  p-3">
        <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Add Day & Time"
            value={inputValuep}
            onChange={(e) => setInputValuep(e.target.value)}
            required
          />
          <label for="floatingInput" className="p-4 fs-5">
            Add Day & Time
          </label>
        </div>
        <div className=" p-3">
          {/*  <button className="btn w-100 text-white p-2 btn-light" style={{backgroundColor:"#810089"}} onClick={SaveTask}>Save Task</button> */}
          <input
            type="submit"
            value="Save Task"
            className="btn w-100 text-white p-2 btn-light"
            style={{ backgroundColor: "#810089" }}
            required
        />
        </div>
      </form>
      
    </>
  );
};

export default AddTask;
