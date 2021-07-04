import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonStyle = styled.div`
  .button {
    margin-top: 3rem;
    font-size: 1.4rem;
    background-color: ${(props) =>
      props.outline ? 'transperant' : 'var(--gray-1)'};
    padding: 0 1em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? 'var(--gray-1)' : '#E4D4C8')};
  }

  @media only screen and (max-width: 768px) {
    .button {
      margin-top: 1rem;
      font-size: 1rem;
    }
  }
`;

export default function DownloadButtonMini({
  btnText = 'test',
  btnLink = 'test',
  outline = false,
}) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      <Link className="button" to={btnLink} target="_blank" download>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}
