import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(180deg, #22202c 0%, #24212e 6.77%, #402845 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  h1 {
    color: #f94d6a;
    font-size: 50px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    input,
    button {
      color: #fff;
      border: none;
      padding: 15px 25px;
      border-radius: 4px;
      margin-bottom: 15px;
    }
    input {
      background: rgba(0, 0, 0, 0.2);
    }
    span {
      color: red;
      font-weight: bold;
      align-self: flex-start;
      margin-bottom: 10px;
    }
    button {
      background: #f94d6a;
      text-align: center;
      transition: all 0.2s;
      &:hover {
        background: ${darken(0.03, '#f94d6a')};
      }
    }
    a {
      color: #fff;
    }
  }
`;
