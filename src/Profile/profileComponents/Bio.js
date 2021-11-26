import React from 'react'

function Bio(props) {
    return (
        <div className='bio'>

            {/* {props.handleAlert(props.title)} */}
            <h1> {props.title} </h1>
         <h2> introduction : </h2>
         <ul>

{props.introduction.map ((el,i)=> (
    <li key={i}> {el} </li>

 
))}
         </ul>
         
         
        
        </div>
    )
}

export default Bio ;
