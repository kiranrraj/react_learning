import React from 'react';
import './TodoCard.css'

function TodoCard() {
    return(
        <div className='todo'>
            <p className="todo--title">Card Title</p>
            <div className='todo--tcontent'>
                <p className='tcontent--text'>Todo Content</p>
                <div className='tcontent--actions tc--action'>
                    <button className='tc--action__delete'>Delete</button>
                    <div className='tc--action__done tc--done'>
                        <input type='checkbox' id='ckdone' className='tc--action__done' value="done"/>
                        <label for="ckdone">Done</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoCard;