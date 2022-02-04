import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import styled from 'styled-components';
const ProductStars = ({ stars, reviews }) => {
    //create array from 0 to 5, since 5 stars is max
    const starsArr = Array.from({ length: 5 }, (_, index) => {
        //number to see if star should be half filled
        //logic will be next: first iteration num = 0.5, next - 1.5 etc.
        const num = index + 0.5;
        return (
            //every iteration we compare product stars amount, so if it is 3.6
            //we will have 3 full stars, 1 half, and 1 empty star
            // first iteration will 3.6 >= 1 true / 3.6 >= 0.5 true
            // next - 3.6 >= 2 true/ 3.6 >= 1.5 true
            // next - 3.6 >= 3 true/ 3.6 >= 2.5 true
            // next - 3.6 >= 4 false/ 3.6 >= 3.5 true;
            //next - 3.6 >= 5 false / 3.6 >= 4.5 false;
            <span>
                {stars >= index + 1 ? (
                    <BsStarFill />
                ) : stars >= num ? (
                    <BsStarHalf />
                ) : <BsStar />

                }
            </span>
        )
    })

    return <div></div>;
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`

export default ProductStars;
