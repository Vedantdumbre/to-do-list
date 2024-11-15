"use client"
import React, { useState } from "react";

const Page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([])
  

  const submitHandler =(e) =>{
    e.preventDefault()
    setMainTask([...mainTask,{title,desc}]);
    settitle("")
    setdesc("")
    console.log(mainTask)
  }
  
const deleteHandler = (i)=>{
  let copyTask = [...mainTask]
  copyTask.splice(i,1)
  setMainTask(copyTask)
}

  let renderTask = "No Task Available"

  if(mainTask.length>0){
  renderTask = mainTask.map((t,i)=>{
    return(
      <li className=" flex items-center justify-between mb-2 " >
        <div  className="flex justify-between w-2/3 text-xl" >
        <h4>{t.title}</h4>
        <h5>{t.desc}</h5>
        </div>
        <button 
        onClick={()=>{
          deleteHandler(i)  
        }}
        className="bg-red-400 rounded text-white px-4 py-2 font-bold " >REMOVE</button>
      </li>
    );
  });}
  return (
    <>
      <h1 className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center font-bold p-5 text-5xl">
        Vedz TODO-LIST
      </h1>
      <form onSubmit={submitHandler} >
        <input
          type="text "
          className="text-xl border-zinc-800 border-4 m-10 rounded-full p-3"
          placeholder="Enter the task  "
          value={title}
          onChange={(e) =>{
            settitle(e.target.value)
          }}
        />
        <input
          type="text "
          className="text-xl border-zinc-800 border-4 m-10  rounded-full p-3"
          placeholder="Enter the description"
          value={desc}
          onChange={(e) =>{
            setdesc(e.target.value)
          }}
        />
        <button className="bg-black rounded-full text-white p-4 m-10 text-xl" >Add Task</button>
      </form>
      <hr />
          <div className="p-8 bg-slate-200" >
          <ul>
            {renderTask}
          </ul>
          </div>
          
    </>
  );
};

export default Page;
