import './card.css'

export default function Card(props) {
    return (<div className='card'>
        <h1>{props.heading}</h1>
        <img src={props.src} alt={props.alt} />
        <ul>
            {props.items && Array.isArray(props.items) && props.items.map(
                (item, index) => (
                    <li key={index}>{item}</li>
                )
            )}
        </ul>
    </div>)
}