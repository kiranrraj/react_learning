import { useState } from "react";
import myData from "./data";

export default function Accordion() {
  const [openid, setOpenid] = useState(null);
  const [multiselect, setMultiselect] = useState(false);
  const [multiIds, setMultiIds] = useState([]);
  let isCurrentAnswerVisible;

  // Function to display answers based on status of multiselect and card selected
  function showAnswer(id, ans) {
    if (multiselect) {
      if (multiIds.includes(id)) {
        return <h3 className="answer">{ans}</h3>;
      } else {
        return null;
      }
    } else {
      if (openid === id) {
        return <h3 className="answer">{ans}</h3>;
      } else {
        return null;
      }
    }
  }

  // Set active cards
  const show = (id) => {
    if (multiselect) {
      if (multiIds.includes(id)) {
        setMultiIds(multiIds.filter((item) => item !== id));
      } else {
        setMultiIds([...multiIds, id]);
      }
    } else {
      if (!(openid == id)) {
        setOpenid(id);
      } else {
        setOpenid(null);
      }
    }
  };

  // Logic to check if the card is open or not
  function answerStatus(id) {
    if (!multiselect) {
      isCurrentAnswerVisible = openid === id;
    } else {
      isCurrentAnswerVisible = multiIds.includes(id);
    }
    return isCurrentAnswerVisible;
  }

  // Handle multiselect
  const handleMultiselect = (status) => {
    if (!multiselect) {
      setMultiIds([]);
      setOpenid(null);
    }
    setMultiselect(status);
  };

  return (
    <div className="container">
      <div className="select">
        <label htmlFor="multi">Multi Selection</label>
        <input
          type="checkbox"
          checked={multiselect}
          name="multi"
          id="multi"
          onChange={() => {
            handleMultiselect(!multiselect);
          }}
        />
      </div>
      {myData.map((data) => {
        return (
          <div className="card" key={data.id}>
            <button className="showBtn" onClick={() => show(data.id)}>
              {/* Show button text */}
              {answerStatus(data.id) ? "Hide" : "Show"}
            </button>
            <h2 className="question">{data.question}</h2>
            {showAnswer(data.id, data.answer)}
          </div>
        );
      })}
    </div>
  );
}
