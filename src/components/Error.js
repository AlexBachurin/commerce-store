import React from 'react';
import styled from 'styled-components';
const Error = () => {
    return <Wrapper className='section-center'>
        <h4>Sorry, some error occured</h4>
    </Wrapper>;
};

const Wrapper = styled.section`
    display: grid;
    place-items: center;
    text-align: center;
    height: 400px;

`



export default Error;
