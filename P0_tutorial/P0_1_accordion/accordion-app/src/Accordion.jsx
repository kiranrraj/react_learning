import React, { useState } from "react"
import myData from "./data"


export default function Accordion() {
    let content = <p>No data found</p>;
    let [multiSelect, setMultiSelect] = useState(false)
    let [activeIdList, setActiveIdList] = useState([])

    // Toggle answer display
    function handleActiveIds(id) {
        if (multiSelect) {
            if (activeIdList.includes(id)) {
                setActiveIdList(prev => prev.filter(item => item !== id));
            } else {
                setActiveIdList(prev => [...prev, id]);
            }
        } else {
            if (activeIdList.includes(id)) {
                setActiveIdList([])
            } else {
                setActiveIdList([id])
            }

        }
    }

    function handleMulti() {
        setMultiSelect((prev) => !prev);
        setActiveIdList([]);
        console.log("Multi select mode:", !multiSelect);
    }

    if (myData && myData.length > 0) {
        content = <div className="itemsContainer">{myData.map((data, _) => {
            return (
                <div key={data.id} className="itemsBlock">
                    <div className="questionBlock">
                        <p className="question" >{data.question}</p>
                        <button
                            className="showHide"
                            onClick={() => { handleActiveIds(data.id) }}
                        >
                            {activeIdList.includes(data.id) ? "Hide" : "Show"}
                        </button>
                    </div>
                    {activeIdList.includes(data.id) && (
                        <p className="answer">{data.answer}</p>
                    )}
                </div>
            )
        }
        )}</div>
    }
    return (
        <div className="container">
            <div className="multiBlock">
                <label htmlFor="multi">Multi Select</label>
                <input type="checkbox" name="multi" id="multi" onChange={handleMulti}
                    checked={multiSelect} />
            </div>
            {content}

        </div>

    )
}

// export default Accordion;