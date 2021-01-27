import Card from '../Card'

import './Body.css'

const Body = () => {

    const produtos = [

        {nome:"Carro", valor:30000, img:"https://exame.com/wp-content/uploads/2020/07/HB20-2020-AUTOM%C3%81TICO-DIVULGA%C3%87%C3%83O.jpg"},

        {nome:"Bicicleta", valor:800, img:"https://media.gazetadopovo.com.br/2020/01/17155825/lamborghini-huracan-Alexander-Migl-wikimedia-commons.jpg"},

        {nome:"Caminhão", valor:200000, img:"https://media.gazetadopovo.com.br/2020/01/17155825/lamborghini-huracan-Alexander-Migl-wikimedia-commons.jpg"},

        {nome:"Onibus", valor:300000, img:"https://exame.com/wp-content/uploads/2020/07/HB20-2020-AUTOM%C3%81TICO-DIVULGA%C3%87%C3%83O.jpg"}

    ]



    function getCards() {

        return produtos.map((produto, index) => <Card key={index} produto={produto.nome} valor={produto.valor} img={produto.img}>Descrição do produto!</Card>)

    }

    return (

        <section className="App-body">
            {getCards()}

        </section>

    )

}

export default Body
