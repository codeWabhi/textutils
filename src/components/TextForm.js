import React, {useState} from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {
    const [text, setText]=useState("");
    const toUpper=()=>{
        let newText=text.toUpperCase(text);
        setText(newText);
    }
    const toLower=()=>{
        let newText=text.toLowerCase(text);
        setText(newText);
    }
    const toClear=()=>{
        setText("");
    }
    const changeMe=(event)=>{
        setText(event.target.value);
    }
   return (
       <>
              
        <div>
            <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} id="exampleFormControlTextarea1" onChange={changeMe} rows="3" style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button className='btn btn-primary' onClick={toUpper}>Convert to Upper case</button>
            
            <button className='btn btn-primary mx-2' onClick={toLower}>Convert to Lower case</button>

            <button className='btn btn-primary mx-2' onClick={toClear}>Clear text</button>
        </div>
        <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
           <h2>
                Your text summary
                </h2>
                <p>{text.split(" ").length} words and {text.length} character</p>
                <h2>Preview</h2>
                <p>{text}</p>
        </div>
        </>
    )
}

