import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa'
import { ProductAmount } from '.';
import { useCartContext } from '../contexts/cart_context';
const ProductAddToCart = ({ colors, stock, product }) => {
  //state for active chosen color, will be first by default
  const [activeColor, setActiveColor] = useState(colors[0]);
  //state for amount
  const [amount, setAmount] = useState(1);
  //add to cart
  const { addToCart } = useCartContext();
  const { id, name, price, images } = product;
  //change amount
  const increase = () => {
    setAmount(oldAmount => {
      let tmpAmount = oldAmount + 1;
      //if amount is gonna be more then items in stock, return stock amount;
      if (tmpAmount > stock) {
        tmpAmount = stock;
      }
      return tmpAmount;
    })
  }
  const decrease = () => {
    setAmount(oldAmount => {
      let tmpAmount = oldAmount - 1;
      //if amount is gonna be less then 1, return 1;
      if (tmpAmount < 1) {
        tmpAmount = 1;
      }
      return tmpAmount;
    })
  }
  //change color on click
  const changeColor = (index) => {
    setActiveColor(colors[index]);
  }
  return <Wrapper>
    <div className="colors">
      <span>colors: </span>
      <div>
        {colors.map((color, index) => {
          return (
            <button key={index} onClick={() => changeColor(index)} className='color-btn' style={{ backgroundColor: `${color}` }}>
              {/* //check if current color is in activeColor state, then we add FaCheck icon, if not add nothing */}
              {color === activeColor ? <FaCheck /> : null}
            </button>
          )
        })}
      </div>
    </div>
    <div className="btn-container">
      <ProductAmount amount={amount} increase={increase} decrease={decrease} />
      <Link onClick={() => addToCart(id, name, amount, activeColor, price, stock, images[0].url)} className='btn' to={'/cart'}>add to cart</Link>
    </div>
  </Wrapper>;
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }
  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`

export default ProductAddToCart;
