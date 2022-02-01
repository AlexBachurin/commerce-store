import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const HeroNavigation = () => {
    return <UpperWrapper>
        <div className="section-center">
            <h3>
                <Link to={'/'}>Home</Link> / About
            </h3>
        </div>
    </UpperWrapper>;
};

const UpperWrapper = styled.section`
    background: var(--clr-primary-10);
    width: 100%;
    min-height: 20vh;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: var(--clr-primary-1);
    a {
        color: var(--clr-primary-3);
        padding: 0.5rem;
        transition: var(--transition);
    }


`

export default HeroNavigation;
