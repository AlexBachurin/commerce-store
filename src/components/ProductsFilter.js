import React from 'react';
import styled from 'styled-components';
import { getUniqueValues } from '../utils.js/helpers';
import { useFiltersContext } from '../contexts/filters_context';
const ProductsFilter = () => {
  const { filtered_products, products } = useFiltersContext();
  console.log(filtered_products);
  //get companies, categories, colors from all products
  const companies = products.map(item => item.company);
  const categories = products.map(item => item.category);
  //also flatten array of colors since it will be array of arrays
  const colors = products.map(item => item.colors).flat();
  //now get unique values from each
  const uniqCompanies = getUniqueValues(companies);
  const uniqCategories = getUniqueValues(categories);
  const uniqColors = getUniqueValues(colors);
  console.log(uniqCategories, uniqColors, uniqCompanies)
  return <Wrapper>
    <div className="content">
      <form>
        <div className="form-control">
          <input type="text" name='text' id='text' placeholder='search' className='search-input' />
        </div>
        <div className="form-control">
          <h5>category</h5>
          <div>
            {uniqCategories.map((item, index) => {
              return (
                <button key={index} type='button' name='category'>{item}</button>
              )
            })}
          </div>
        </div>
        <div className="form-control">
          <h5>company</h5>
          <select name="company" id="company">
            {uniqCompanies.map((item, index) => {
              return (
                <option key={index} value={item}>{item}</option>
              )
            })}
          </select>
        </div>
        <div className="form-control">
          <h5>colors</h5>
          <div className="colors">
            {uniqColors.map((color, index) => {
              return (
                <button key={index} name='color' className='color-btn' data-color={color} style={{ background: `${color}` }}></button>
              )
            })}
          </div>
        </div>
        <div className="form-control">
          <h5>price</h5>
          <p className="price">$545454</p>
          <input type="range" name='price' min='0' max='309999' />
        </div>
        <div className="form-control shipping">
          <label htmlFor="shipping">Free shipping</label>
          <input type="checkbox" name='shipping' id='shipping' />
        </div>
      </form>
    </div>
  </Wrapper>;
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }
  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
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
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`

export default ProductsFilter;
