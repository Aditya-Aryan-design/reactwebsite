//using useState
import React, {useState} from 'react'


export default function TextForm(aditya) {
  const UPclick = ()=>{
    setText(text.toUpperCase());
    aditya.alertFun('clicked on Upper-Case','primary')
  }
    const LOWclick = ()=>{
      setText(text.toLowerCase());
      aditya.alertFun('clicked on Lower-Case','primary')
    }
    const ONchange = (event)=>{
      setText(event.target.value)
    }
    const ExtraSpace = ()=>{
      setText(text.split(/[ ]+/).join(" "));
      aditya.alertFun('clicked on Extra-Space','secondary')
    }
    const ClearText = ()=>{
      setText("");
      aditya.alertFun('clicked on Clear-Text','danger')
    }
    const CopyText = ()=>{
      let text = document.getElementById("exampleFormControlTextarea1")
      text.select();
      navigator.clipboard.writeText(text.value);
      aditya.alertFun('clicked on Copy-Text','warning')
    }
    
    const [text,setText] = useState("");
  return (
    <div style={{color: aditya.mode==="light"?"black":"#abfae3"}}>
<div className="mb-3">
  <div className="container">
        <h2>{aditya.title}</h2>
  <label htmlFor="exampleFormControlTextarea1" className="form-label">{text}</label>
  <textarea className="form-control border-primary" id="exampleFormControlTextarea1" rows={aditya.rows} value={text} onChange={ONchange} style={{backgroundColor:aditya.mode==="light"?"white":"grey"}}></textarea>
  <button className={`btn btn-${aditya.mode==="light"?"success":"danger"} my-3`} onClick={UPclick} >Upper-Case</button>
  <button className={`btn btn-${aditya.mode==="light"?"success":"danger"} my-3 mx-3`} onClick={LOWclick} >Lower-Case</button>
  <button className={`btn btn-${aditya.mode==="light"?"success":"danger"} my-3`} onClick={ExtraSpace} >Extra-Space</button>
  <button className={`btn btn-${aditya.mode==="light"?"success":"danger"} my-3 mx-3`} onClick={ClearText} >Clear-Text</button>
  <button className={`btn btn-${aditya.mode==="light"?"success":"danger"} my-3`} onClick={CopyText} >Copy-Text</button>
    </div>
</div>
<div className="container my-2">
    <h2>Text summery</h2>
    <p>{text.split(" ").length-1} words and {text.length} letters in your article</p>
    <p>{text===""?"Enter Text":text}</p>
</div>
    </div>
  )
}
