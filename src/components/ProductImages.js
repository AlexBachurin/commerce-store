import React, { useState } from 'react';
import styled from 'styled-components';
const ProductImages = ({ images }) => {
    //state for main image to display, by default will be first image by index of 0,
    //dont forget in in main variable will be object, not url, so we must access url as main.url
    const [main, setMain] = useState(images[0]);
    //change main image on click in gallery by index of image
    const changeImage = (index) => {
        setMain(images[index])
    }
    return <Wrapper>
        <img src={main.url} alt={main.filename} />
        <div className="gallery">
            {images.map((img, index) => {
                //add className to current main image, by comparing their urls, if they match it is current active image in gallery
                let clsName = '';
                if (img.url === main.url) {
                    clsName = 'active'
                }
                return (
                    <img onClick={() => changeImage(index)} className={clsName} key={img.id} src={img.url} alt={img.filename} />
                )
            })}
        </div>
    </Wrapper>;
};

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`

export default ProductImages;
