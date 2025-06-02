import { useState } from "react";
import myData from "./data";

export default function Accordion() {
  const [answer, setAnswer] = useState(null);

  const show = (id) => {
    // If the clicked ID is already the one in state, set it to null (hide it)
    // Otherwise, set it to the new ID (show it)
    setAnswer(answer === id ? null : id);
  };

  return (
    <div className="container">
      {myData.map((data) => {
        const isCurrentAnswerVisible = answer === data.id;
        return (
          <div className="card" key={data.id}>
            <button className="showBtn" onClick={() => show(data.id)}>
              {isCurrentAnswerVisible ? "Hide" : "Show"}
            </button>
            <h2 className="question">{data.question}</h2>
            {answer === data.id ? <h3 className="answer">{data.answer}</h3> : null}
          </div>
        );
      })}
    </div>
  );
}
