import React from 'react'


const Button =  ( props ) => {
    
    return <button onClick={ ()=>props.onClick() }> { props.likes ? 'like' : 'dislike' } </button>
}

export default Button