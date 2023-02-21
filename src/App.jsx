import "./App.css";
import { useState } from "react";
import contacts from "./contacts.json";



function App() {
  const [firstFive, setFirstFive] = useState(contacts.slice(0, 5));
  const [remaining, setRemaining] = useState(contacts.slice(5))
  function randomContact() {
    const random = Math.round(Math.random() * remaining.length)
    const contact = remaining.splice(random, 1)[0]
    console.log(remaining.length) 
    setFirstFive([...firstFive, contact])
  }
 /*  function delete() {
    const id = 
  } */
  return (
    <div className="App">
      <h1>Ironcontacts</h1>
      <button onClick={() => randomContact()}>
          Add Random Contact
      </button>
      <button onClick={() => setFirstFive((firstFive) => [...firstFive].sort((a, b) => (a.name > b.name) ? 1 : -1))}>
          Sort By Name
      </button>
      <button onClick={() => setFirstFive((firstFive) => [...firstFive].sort((a, b) => (a.popularity < b.popularity) ? 1 : -1))}>
          Sort By Popularity
      </button>
      <table id="table">
        <thead>
          <tr> 
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won<br></br>Oscar</th>
            <th>Won<br></br>Emmy</th>
            <th>Actions</th>
         </tr>
        </thead>
        <tbody>
        {firstFive.map((x, index) => (
          <tr key={x.id}>
            <td>
              <img src={x.pictureUrl} alt="pic" />
            </td>
            <td>{x.name}</td>
            <td>{Math.round(x.popularity * 100) / 100}</td>
            <td>{x.wonOscar === true ? '🏆' : ''}</td>
            <td>{x.wonEmmy === true ? '🏆' : ''}</td>
            <td>
              <button onClick={() => setFirstFive((firstFive) => firstFive.splice(index, 1) )}>
                Delete
              </button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;


