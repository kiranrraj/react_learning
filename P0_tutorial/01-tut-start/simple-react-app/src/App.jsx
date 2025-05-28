import './App.css'
import Card1 from './components/card1'
import { people } from './data/data'
// import Card from './components/card'

// function Gallery () {
//   return (
//     <Card 
//       src="https://picsum.photos/300"
//       alt="Placeholder image"
//       heading="My Profile"
//       items={["Description 1", "Description 2"]}
//       />
//   )
// }

function Gallery() {
  return(
    <div className="app-container">
      <h1 className="main">Famous Scientists and Mathematicians</h1>
      <section className="people-gallery">
        {people.map( person => (
          <Card1 
            key={person.id}
            name={person.name}
            profession={person.profession}
            accomplishment={person.accomplishment}
            imageId={person.imageId}
          />
        ))}
      </section>
    </div>
  )
}


export default function App() {
  return(
    <>
      <Gallery />
    </>
  )
}
