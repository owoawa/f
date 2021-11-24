import React from 'react'

const Header = ({ header }) => {
    return <h1>{header}</h1>
}

const Part = ({name, exercises}) => {
    return <p>{name} {exercises}</p>
}
  
const Course = ({ c }) => {
    return (
      <div>
       <Header header={c.name} />
       {c.parts.map(x=><Part key={x.id} name={x.name} exercises={x.exercises} />)}
       <p><b>total of {c.parts.reduce((sum, x) => sum+x.exercises,0)} exercises</b></p>
      </div>
    )
}




export default Course