import React, { useState } from 'react'
import './SubmitForm.css'

const SubmitForm=()=>{

    const [inputValue,setInputValue] = useState({firstname:"",Lastname:"",Password:"",ConfirmPassword:""})
    const [submit,setSubmit] = useState([])
    const [gender,setGender] = useState([])
    const [html,setHtml] = useState()
    const [css,setCss] = useState()
    const [javaScript,setJavaScript] = useState()
    const [bootstrap,setBootstrap] = useState()
    const [tailwind,setTailwind] = useState()
    const [sass,setSass] = useState()
    const [reactJs,setReactJs] = useState()
    const [angular,setAngular] = useState()
    const [vueJs,setVueJs] = useState()

    const handleInputValueFirst=(e)=>{
        setInputValue({...inputValue,firstname:e.target.value})
    }

    const handleInputValueLast=(e)=>{
        setInputValue({...inputValue,Lastname:e.target.value})
    }

    const handleInputValuePassword=(e)=>{
        setInputValue({...inputValue,Password:e.target.value})
    }

    const handleInputValueConfirm=(e)=>{
        setInputValue({...inputValue,ConfirmPassword:e.target.value})
    }

    const handleSubmit=()=>{
        let arr = [...submit]
        arr.push(inputValue,"Gender :"+gender,html,css,javaScript,bootstrap,tailwind,sass,reactJs,angular,vueJs)
        setSubmit(arr)
    }

    const handleGenderMale=(e)=>{
        setGender(e.target.value)
    }

    const handleGenderFemale=(e)=>{
        setGender(e.target.value)
    }

    const handleHtml=(e)=>{
        setHtml(e.target.value)
    }

    const handleCss=(e)=>{
        setCss(e.target.value)
    }

    const handleJava=(e)=>{
        setJavaScript(e.target.value)
    }

    const handleBoot=(e)=>{
        setBootstrap(e.target.value)
    }

    const handleTail=(e)=>{
        setTailwind(e.target.value)
    }

    const handleSass=(e)=>{
        setSass(e.target.value)
    }

    const handleReact=(e)=>{
        setReactJs(e.target.value)
    }

    const handleAngular=(e)=>{
        setAngular(e.target.value)
    }

    const handleVue=(e)=>{
        setVueJs(e.target.value)
    }
    console.log(submit)

    return (
        <div className='container'>
            <span className='text'>Developer Detail</span>
            <div className='inputs'>
                <input type='text' onChange={handleInputValueFirst} value={inputValue.firstname}/>
                <input type='text' onChange={handleInputValueLast} value={inputValue.Lastname}/>
                <input type='text' onChange={handleInputValuePassword} value={inputValue.Password}/>
                <input type='text' onChange={handleInputValueConfirm} value={inputValue.ConfirmPassword}/>
            </div>
            <div className='gender'>
                Gender:
            <span> 
            <input type='radio' value="Male" onChange={handleGenderMale} checked={gender==="Male"?"Male":""}/>Male
            <input type='radio' value="Female" onChange={handleGenderFemale} checked={gender==="Female"?"Female":""}/>Female
            </span>
            <div className='border_line'><p className='dot'>...</p></div>
            </div>
            <b className='tech'>Technologies</b>
                <section className='languages'>
                <p><input type='checkbox' value="HTML" onChange={handleHtml}/>HTML</p> 
                <p><input type='checkbox' value="CSS" onChange={handleCss}/>CSS</p>
                <p><input type='checkbox' value="JavaScript" onChange={handleJava}/>JavaScript</p> 
                <p><input type='checkbox' value="Bootstrap" onChange={handleBoot}/>Bootstrap</p>
                <p><input type='checkbox' value="Tailwind" onChange={handleTail}/>Tailwind</p>
                <p> <input type='checkbox' value="SASS" onChange={handleSass}/>SASS</p>
                <p> <input type='checkbox' value="React JS" onChange={handleReact}/>React JS</p>
                <p><input type='checkbox' value="Angular" onChange={handleAngular}/>Angular</p>
                <p><input type='checkbox' value="Vue Js" onChange={handleVue}/>Vue Js</p>
                </section>
                <div className='border_line1'><p className='dot1'>...</p></div>
                <b className='question'>Questions</b>
                <section className='que_div'>
                    <span>
                       <p className='que1'> 1.Have you used ChatGPT in your project?</p>
                        <input type='radio' value="Yes"/>Yes
                        <input type='radio' value="No"/>No
                    </span>
                    <span>
                       <p className='que1'> 2.Can ChatGPT replace human interactions in certain scenarios?</p>
                        <input type='radio' value="Yes"/>Yes
                        <input type='radio' value="No"/>No
                    </span>
                    <span>
                       <p className='que1'> 3.Would you recommend ChatGPT to other developers?</p>
                        <input type='radio' value="Yes"/>Yes
                        <input type='radio' value="No"/>No
                    </span>
                    <span>
                       <p className='que1'> 4.Have you used other conversational AI tools?</p>
                        <input type='radio' value="Yes"/>Yes
                        <input type='radio' value="No"/>No
                    </span>
                    <span>
                       <p className='que1'> 5.Rate ChatGPT from average to excellent?</p>
                        <input type='radio' value="Average"/>Average
                        <input type='radio' value="Good"/>Good
                        <input type='radio' value="Very Good"/>Very Good 
                        <input type='radio' value="Excellent"/>Excellent
                    </span>
                </section>
                <div className='buttons'>
                    <button className='submit' onClick={handleSubmit} >Submit</button>
                    <button className='reset'>Reset</button>
                </div>
        </div>
    )
}

export default SubmitForm