import Card from "./Card"

function CardContainer(props){
    return <div className={props.className}>
        <Card/>
    </div>
}

export default CardContainer