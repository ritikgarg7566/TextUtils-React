import React, { useState } from 'react'




export default function TextForm(props) {
    function handleUpClick() {
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showAlert("converted to uppercase!", "success");
    }
    function handleLoClick() {
        let newtext = text.toLowerCase()
        setText(newtext)
        props.showAlert("converted to Lowercase!", "success")
    }
    function handlespaceClick() {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
    }
    function handleclearClick() {
        setText("")
    }
    function handleOnChange(event) {
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    return (
        <>
            <div style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'light' ? '#042743' : 'white' }} id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
                <div className="row">
                    <div className="col-lg-2  mb-3">
                        <button disabled={text.length===0} className='btn btn-primary ' onClick={handleUpClick}>Convert to Uppercase</button>
                    </div>
                    <div className="col-lg-2 mb-3">
                        <button disabled={text.length===0} className='btn btn-primary ' onClick={handleLoClick}>Convert to Lowercase</button>
                    </div>
                    <div className="col-lg-2  mb-3">
                        <button disabled={text.length===0} className='btn btn-primary ' onClick={handlespaceClick}>Remove Extraspace</button>
                    </div>
                    <div className="col-lg-2  mb-3">
                        <button disabled={text.length===0} className='btn btn-primary ' onClick={handleclearClick}>Clear Text</button>
                    </div>
                </div>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} Words {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((ele)=>{return ele.length!==0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter something in the textbox above to preview it here'}</p>
            </div>
        </>
    )
}
