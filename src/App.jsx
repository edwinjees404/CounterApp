import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { changeRange, decrement, increment, reset } from "./redux/counterSlice";

function App() {
  const [range, setRange] = useState(0)
  const count = useSelector((state)=>state.counter.value)
  

  const dispatch = useDispatch()
  return (
    <>
    <div style={{width:"100%",height:"100vh",backgroundColor:"black"}} className="d-flex justify-content-center align-items-center">
      <div className="bg-light p-5 rounded" style={{width:"500px"}}>
      <h1 className="text-primary text-center">Counter Application</h1>
      <h1 className="text-center my-5" style={{fontSize:"70px"}}>{count}</h1>
      <div className="d-flex justify-content-evenly">
        <button onClick={()=>dispatch(decrement())} className="btn btn-success">decrement</button>
        <button onClick={()=>dispatch(reset())} className="btn btn-danger">Reset</button>
        <button onClick={()=>dispatch(increment())} className="btn btn-warning">Increment</button>

      </div>
      <div className="d-flex mt-5">
        <input type="text" className="form-control" placeholder="Range" onChange={(e)=>setRange(e.target.value)} />
        <button className="btn btn-primary ms-3" onClick={()=>dispatch(changeRange(Number(range)))}>Click</button>
      </div>
      </div>
    </div>
    
    </>
  );
}

export default App;