"use client";

import { useState } from "react";

export default function StrPractic(){
  //const val="hello";
  const [val, setVal]=useState("");
  const[val2,setVal2]=useState("");
  const changhandler=(e:any)=>{
    // console.log("e is",e.target.value);
    setVal(e.target.value)
    
  }
  const changhandler2=(e:any)=>{
    // console.log("e is",e.target.value);
    setVal2(e.target.value)
    
  }

  return (
    <>
    <input type={"text"} value={val} onChange={changhandler}></input>
    <br></br>
    <input type={"text"} value={val2} onChange={changhandler2}></input>
    <br></br>
    length of string 1={val.length}
    <br>
    </br>
    length of string 2={val2.length}
    </>
  );
}