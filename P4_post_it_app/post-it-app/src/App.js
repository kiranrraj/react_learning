import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CardContainer from "./Components/CardContainer";
import styles from './Styles/Header.module.css'
import { useState } from "react";
import Modal from "./Components/Modal";


function App() {

  const [showModal, setShowModal] = useState(false)
  const [noteText, setNoteText] = useState("")
  const [notes, setNotes] = useState("")

  function handleClick() {
    setShowModal(true)
  }

  function handleCloseModal() {
    setShowModal(false)
    setNoteText("")
    console.log("Close working")
  }

  function handleSave(){
    if (noteText.trim() === 0) return;
    console.log("Save working")
    
    const newNote = {
      id: Date.now(),
      text: noteText
    }

    setNotes([...notes, newNote])
    handleCloseModal()
  }

  return (
    <div className="App">
      <Header 
        headerMainStyle={styles.Header} 
        appName="Post It" 
        headerSubStyle={styles.HeaderSub} 
        headerBtnStyle={styles.Btn} 
        onClick={handleClick}
      />
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <h3>Create New Note</h3>
          <textarea
            autoFocus
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            placeholder="Write your note"
            rows="4"
            cols="30" />
          <br />
          <button onClick={handleSave}>Save</button>
        </Modal>
      )}
      <CardContainer />
      <Footer />
    </div>
  );
}

export default App;
