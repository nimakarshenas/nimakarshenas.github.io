import React from 'react';
import styled from 'styled-components';

const AboutItemStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  /* gap: 5rem; */
  margin-top: 5rem;
  .title {
    font-size: 2.2rem;
  }
  .items {
    display: contents;
    gap: 1.5rem;
    position: absolute;
    left: 28rem;
  }
  .item {
    margin-left: 20px;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
    font-size: 1.3rem;
    max-width: 200px;
  }
  .item__text {
    font-size: 1.6rem;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
    }
    .title {
      font-size: 2rem;
    }
    .item__text {
      font-size: 1.2rem;
    }
    .item {
      margin-left: 0px;
    }
  }
`;

export default function AboutInfoSkills({
  title = 'Title',
  items = ['HTML', 'CSS'],
}) {
  return (
    <AboutItemStyles>
      <h1 className="title">{title}</h1>
      <ul className="items">
        {items.map((item, index) => (
          <li className="item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </AboutItemStyles>
  );
}
