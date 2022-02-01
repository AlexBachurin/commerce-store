import React from 'react';
import styled from 'styled-components';
const Loading = () => {
    return <Wrapper>
        <img src="https://res.cloudinary.com/dljezd6qv/image/upload/v1643160653/1200x1200_ppwqkf.gif" alt="loading" />
    </Wrapper>;
};

const Wrapper = styled.main`
    display: grid;
    place-items: center;
    width: 200px;
    height: 200px;
    margin: 0 auto;
    margin-top: 50px;
    img {
        display: block;
        margin: 0 auto;
        width: 100%;
        height: auto;
        object-fit: cover;
    }
   

`

export default Loading;
