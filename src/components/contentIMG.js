import React from 'react'
import Button from './button'
import ImgComponent from './imgComponent'

const ContentIMG = ( props ) =>{
    
    console.log(props)

    return (<div> 
        <ImgComponent 
            url='https://cdn5.dibujos.net/dibujos/pintados/201804/patito-feo-animales-aves-11260997.jpg'
            alt='Patito Feo'
        />
        <Button likes onClick = {props.fnLike} />
        <Button onClick = {props.fnDislike} />
     {

            props.likeMe ? 'MeGusta' : ''
        
     }
     {

            props.dislikeMe ? 'NoMegusta' : ''
            
     }
    </div>)
}

export default ContentIMG
