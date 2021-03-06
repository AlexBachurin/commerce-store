import React from 'react';
import styled from 'styled-components';
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useProductsContext } from '../contexts/products_context';
import { useCartContext } from '../contexts/cart_context';
// import { useAuth0 } from '@auth0/auth0-react';
import { useAuthContext } from '../contexts/authContext';
const NavInteraction = () => {
  const { closeSidebar } = useProductsContext();
  const { total_amount } = useCartContext();
  const { signIn, isAuthenticated, user, logout } = useAuthContext();
  const isUser = isAuthenticated && user;
  return <Wrapper className='cart-btn-wrapper'>
    <Link onClick={closeSidebar} className='cart-btn' to={'/cart'}>
      Cart
      <span className='cart-container'>
        <AiOutlineShoppingCart />
        <span className='cart-value'>{total_amount}</span>
      </span>
    </Link>
    {/* //if logged in, show logout button else show login button */}
    {isUser ?
      <button onClick={() => logout()} className="auth-btn">
        Logout
        <img className='user-img' src={user.photoURL} alt={user.displayName} />
      </button>
      :
      <button onClick={() => signIn()} className="auth-btn">
        Login
        <AiOutlineUser />
      </button>
    }
  </Wrapper>;
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;
  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;
    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
  .user-img {
    width: 100%;
    height: 40px;
    border-radius: 20px;
    margin-left: 10px;
    object-fit: cover;
  }
`

export default NavInteraction;
