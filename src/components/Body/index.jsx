import axios from "axios";
import Card from "../Card";

import "./Body.css";

const Body = () => {
  // const produtos = [

  //     {nome:"Carro", valor:30000, img:"https://exame.com/wp-content/uploads/2020/07/HB20-2020-AUTOM%C3%81TICO-DIVULGA%C3%87%C3%83O.jpg"},

  //     {nome:"Bicicleta", valor:800, img:"https://media.gazetadopovo.com.br/2020/01/17155825/lamborghini-huracan-Alexander-Migl-wikimedia-commons.jpg"},

  //     {nome:"Caminhão", valor:200000, img:"https://media.gazetadopovo.com.br/2020/01/17155825/lamborghini-huracan-Alexander-Migl-wikimedia-commons.jpg"},

  //     {nome:"Onibus", valor:300000, img:"https://exame.com/wp-content/uploads/2020/07/HB20-2020-AUTOM%C3%81TICO-DIVULGA%C3%87%C3%83O.jpg"}

  // ]

  async function getCards() {
    var produtos =await axios.get("https://fakestoreapi.com/products")
    var cards=[]
    for (let prod of produtos.data){
        cards.push(<Card produto={prod.title} valor={prod.price} img={prod.image}/>)
    }
    console.log(cards)
    return cards

  }

  return <section className="App-body">{getCards()}</section>;
};

export default Body;
