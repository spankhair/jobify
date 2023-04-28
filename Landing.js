import React from "react";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import styled from "styled-components";

export const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobify" className="logo"></img>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby neutra listicle laboris palo santo disrupt keffiyeh keytar
            kombucha wayfarers raclette mukbang labore. Eu dolore pinterest
            consequat tbh air plant yr quci succulents chambray vaporware lomo
            marxism gochujang. Forage live-edge sunt cronut anim. Retro you
            probably haven't heard of them listicle, aesthetic occaecat ad ramps
            activated charcoal PBR&B knausgaardla sartorial irure. Farm-to-table
            enim mollit cloud bread mumblecore ex sartorial normcore.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
      </div>
      <img src={main} alt="job hunt" className="img main-img"></img>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc() (100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: 1rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
      width: auto;
    }
  }
`;

export default Landing;
