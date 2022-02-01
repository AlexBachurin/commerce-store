import React from 'react';
import styled from 'styled-components';
const Loading = () => {
    return <Wrapper>
        <img src="https://res.cloudinary.com/dljezd6qv/image/upload/v1643160653/1200x1200_ppwqkf.gif" alt="loading" />
    </Wrapper>;
};

const Wrapper = styled.div`
    display: grid;
    place-items: center;
   

`

export default Loading;
