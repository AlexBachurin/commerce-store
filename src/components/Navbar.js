import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'
import { links } from '../utils.js/constants';
import { NavInteraction } from '.';
import { useProductsContext } from '../contexts/products_context';
import { useAuth0 } from '@auth0/auth0-react';
const Navbar = () => {
  const { openSidebar } = useProductsContext();
  const { isAuthenticated, user } = useAuth0();
  return <NavContainer>
    <div className="nav-center">
      <div className="nav-header">
        <Link to={'/'}>
          <img src='https://res.cloudinary.com/dljezd6qv/image/upload/v1643432194/commerce-store/logo_fmvgto.svg' alt='logo'></img>
        </Link>
        <button className='nav-toggle' onClick={openSidebar}><GiHamburgerMenu /></button>
      </div>
      <ul className="nav-links">
        {links.map(link => {
          const { id, url, text } = link;
          // eslint-disable-next-line
          {/* //only show checkout link if user is logged in */ }
          if (text === 'checkout') {
            if (isAuthenticated && user) {
              return <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            } else {
              return null;
            }
          }
          return (
            <li key={id}>
              <Link to={url}>{text}</Link>
            </li>
          )
        })}
      </ul>
      <NavInteraction />
    </div>
  </NavContainer>
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default Navbar;
