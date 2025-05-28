import './card1.css'

export default function Card1(props) {
    const getImageURL = (imageId) => {
        return `https://i.imgur.com/${imageId}.jpeg`;
    }
    return(
        <div className="card1">
            <div className="left-block">
                <p className="name">{props.name}</p>
                <p className="profession">{props.profession}</p>
                <p className="accomplishment">{props.accomplishment}</p>
            </div>
            <div className="avatar">
                <img src={getImageURL(props.imageId)} alt={props.name} />
            </div>
        </div>
    )
}