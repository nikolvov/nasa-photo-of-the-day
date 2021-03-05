import React from 'react'
import Copyright from './Copyright'

const Photo = props => {
    return (
        <div>
            <img src = {props.photo} alt = ''/>
            <Copyright copyright = {props.copyright}/>
        </div>
    )
}

export default Photo