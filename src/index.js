import React from 'react'
import ReactDOM from 'react-dom'

// const Title = ({course}) => <h1>{course}</h1>
// const Header = (props) => {
//   const {course} = props //esto
//   const course = props.course /y esto, es lo mismo
//   return <h1>{course}</h1>
// }
// const Content = (props) => {
//   const part1 = props.parts[0]
//   const part2 = props.parts[1]
//   const part3 = props.parts[2]
//   return [
//     <p>{part1.name} {part1.exercises}</p>, 
//     <p>{part2.name} {part2.exercises}</p>, 
//     <p>{part3.name} {part3.exercises}</p>
//   ]
// }

// const Total = (props) => {
  
//   const exercise1 = props.parts[0].exercises
//   const exercise2 = props.parts[1].exercises
//   const exercise3 = props.parts[2].exercises
//   return <p>Number of exercises {exercise1 + exercise2 + exercise3}</p>
// }

const Page = (props) => {
  const course = props.course.name
  const part1 = props.course.parts[0]
  const part2 = props.course.parts[1]
  const part3 = props.course.parts[2]

  return [
    <h1>{course}</h1>,
    <p>{part1.name} {part1.exercises}</p>,
    <p>{part2.name} {part2.exercises}</p>,
    <p>{part3.name} {part3.exercises}</p>,
    <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
  ]
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Page course={course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))