import React, { useState } from 'react'

import Dog from './ApiCalling/Dog'
import Cat from './ApiCalling/Cat'
import Form from './Form/Form'

import { HiInformationCircle } from 'react-icons/hi'
import './Header.css'


const Header = () => {

    const [details, setDetails] = useState(false)
    const [favPage, setFavPage] = useState(false)
    const [form, setForm] = useState(false)
    const [about, setAbout] = useState(false)
    const [displayDog, setDisplayDog] = useState(true)
    const [displayCat, setDisplayCat] = useState(false)
    const [addFav, setAddFav] = useState([])

    const handleDetails = () => {
        setDetails(true)
        setFavPage(false)
        setForm(false)
        setAbout(false)
    }

    const handleFavorite = () => {
        setFavPage(true)
        setForm(false)
        setDetails(false)
        setDisplayCat(false)
        setDisplayDog(false)
    }

    const handleForm = () => {
        setDetails(false)
        setFavPage(false)
        setForm(true)
        setDisplayCat(false)
        setDisplayDog(false)
    }

    const handleAboutIn = () => {
        setAbout(true)
        setDisplayCat(false)
        setDisplayDog(false)
        setForm(false)
        setFavPage(false)
        
    }
    const handleAboutOut = () => {
        setAbout(false)
    }

    const handleDisplayDog = () => {
        setDetails(true)
        setDisplayDog(true)
        setDisplayCat(false)
    }

    const handleDisplayCat = () => {
        setDisplayCat(true)
        setDisplayDog(false)
    }
    return (
        <div>
            <div className='head'>
                <span onClick={handleDetails}>{details && !favPage && !form ?<b className='home'>HOME</b>: <b>HOME</b>}</span>
                <span onClick={handleFavorite}>{!details && favPage && !form ?<b className='favourite'>FAVOURITE</b>: <b>FAVOURITE</b>}</span>
                <span onClick={handleForm}>{!details && !favPage && form ?<b className='form'>FORM</b>: <b>FORM</b>}</span>
                <span onMouseOver={handleAboutIn} onMouseOut={handleAboutOut}><b>ABOUT</b><HiInformationCircle className='info' /></span>
            </div>
            <div className='dogcatbutton'>
                <span>{details ? <button onClick={handleDisplayDog}className='homedogbutton'>DOG</button> : ""}</span>
                <span> {details ? <button onClick={handleDisplayCat} className='homecatbutton'>CAT</button> : ""}</span>
            </div>
            <div className='dogcatbutton'>
                <span>{favPage ? <button className='dogbutton'>DOG</button> : ""}</span>
                <span> {favPage ? <button className='catbutton'>CAT</button> : ""}</span>
            </div>
            {favPage ?
            <div>
            {addFav.map((item)=>(
                    <div>
                        {item.id}
                        <img src={item.url} alt=''/>
                        </div>
                ))}
            </div>: ""}
            <div>
                {displayDog ? <Dog addFav={addFav} setAddFav={setAddFav}/> : ""}
                {displayCat ? <Cat /> : ""}
            </div>

            <div>
                {form ? <Form/> : "" }
            </div>
            {about ?
                <div className='about'>
                    <h3>DOG</h3>
                    <p>The dog is a domesticated descendant of the wolf. Also called the domestic dog, it is derived from extinct Pleistocene wolves, and the modern wolf is the dog's nearest living relative. Dogs were the first species to be domesticated by hunter-gatherers over 15,000 years ago before the development of agriculture</p>
                    <h3>CAT</h3>
                    <p>The cat is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is commonly referred to as the domestic cat or house cat to distinguish it from the wild members of the family</p>
                </div> : ""}
        </div>
    )
}

export default Header