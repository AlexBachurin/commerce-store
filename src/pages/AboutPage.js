import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const AboutPage = () => {
    return <main>
        <UpperWrapper>
            <div className="section-center">
                <h3>
                    <Link to={'/'}>Home</Link> / About
                </h3>
            </div>
        </UpperWrapper>
        <Wrapper className='page section section-center'>
            <img src="https://res.cloudinary.com/dljezd6qv/image/upload/v1643432214/commerce-store/about-img.jpg" alt="about" />
            <article>
                <div className="title">
                    <h2>our story</h2>
                    <div className="underline"></div>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.</p>
            </article>
        </Wrapper>
    </main>;
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`

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

export default AboutPage;
