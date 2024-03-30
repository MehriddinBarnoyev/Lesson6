import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Component } from 'react';
import ProductCard from './Components/ProductCard';
import Header from './Components/Header';

const DataProducts = [
  {
    id:1,
    groupName: "Smart",
    price: "2 523 000",
    priceMonth: "5 294 000",
    title: "Honor X7b 8/128 GB White"
  },
  {
    id:2,
    groupName: "Smart",
    price: "2 523 ",
    priceMonth: "5 294 000",
    title: "Honor X7b 8/128 GB Black"
  },
  {
    id:3,
    groupName: "Smart",
    price: "2 523 000",
    priceMonth: "5 294 000",
    title: "Honor b 8/128 GB Grey"
  },
  {
    id:4,
    groupName: "Smart",
    price: "2 523 000",
    priceMonth: "5  000",
    title: "Honor X7b 8/128 GB Red"
  },
  {
    id:5,
    groupName: "Alo",
    price: "2 523 000",
    priceMonth: "5 294 000",
    title: "Honor X7b 8/128 GB Blue"
  }
]

class App extends Component {
  constructor (){
    super();

    this.state={
      basket:[]
    }
  }

  buy = (product) =>{
    console.log("Sotib olishga tanlandi");
    console.log(product);
    

   
    this.setState((state) =>{
    let arr = [...state.basket];
    arr.push(product);
      return{basket:arr}
    })
  }
  render() {
    // console.log(this.buy);
    console.log(this.state.basket);
    return (
      <div className=''>
        {/* BU yerda header bor */}
        <Header basket={this.state.basket}/>
        <section id="products " className='py-5'>
          <div className="container-fluid">
            {/* mahsulotlar qatori */}
            <div className="row ">
              {
                DataProducts.map((v)=>
                <div key={v.id} className="col col-sm-6 col-md-4 col-lg-3 productCol">
                <ProductCard data={v} buy={ () => this.buy} />
              </div>
                )
              }  
            </div>
          </div>
        </section>
      </div>
    );
  }
}


export default App;
