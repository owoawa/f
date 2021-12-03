import React from 'react'

const Notification = ({message,isIt}) => {
    const messageStyleGood = {
        background: 'lightgray',
        color: 'green',
        fontSize: '25px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px'

    }

    const messageStyleBad = {
        background: 'lightgray',
        color: 'red',
        fontSize: '25px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px'

    }
    console.log(isIt)
    if (message === null) return null
    if (isIt) return <p style={messageStyleGood}>{message}</p>
    else return (
        <p style={messageStyleBad}>{message}</p>
    )

} 

export default Notification