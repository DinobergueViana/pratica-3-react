
import './Card.css'


const Card = (props) => {

    return (

        <div className="Card">

            <img src={props.img} alt=""/>

            <h3>{props.produto}</h3>

            <h4>R${props.valor.toFixed(2).replace(".", ",")}</h4>

        </div>

    )

}



export default Card