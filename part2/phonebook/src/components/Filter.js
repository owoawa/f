import React from 'react'

const Filter = ({setNewFilter}) => {
    return (
        <div>
            filter shown with <input onChange={(event) => setNewFilter(event.target.value)}/>
        </div>
    )
}

export default Filter