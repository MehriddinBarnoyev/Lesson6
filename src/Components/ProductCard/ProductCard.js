import ProductImg from './../../Product2.jpg'
import { Component } from 'react';
import './ProductCard.css';

class ProductCard extends Component {

  constructor() {
    super();




  }
  render() {


    const { groupName, price, priceMonth, title } = this.props.data;

    return (
      <div className="productCard">
        <img className='d-block productImg' src={ProductImg} alt="" />

        <a href="s" className='groupName d-block mb-3 mt-2'>
          {groupName}
        </a>
        <p className='price mb-2'>
          {price} sum
        </p>
        <p className='priceMonth'>
          {priceMonth} sum/oy</p>
        <p className='title'>
          {title.toUpperCase()}
        </p>
        <a href="s" className='btn btn-outline-primary mb-3 ms-2' onClick={this.props.buy}>Sotib olish</a>
      </div>
    )
  }
} export default ProductCard;