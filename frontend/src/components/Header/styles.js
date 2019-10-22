import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  aside {
    display: flex;
    align-items: center;
    a.btn {
      background: #d44059;
      color: #fff;
      padding: 10px 15px;
      border-radius: 4px;
      margin-left: 20px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: bold;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid #fff;
    margin-right: 10px;
  }
  p {
    display: flex;
    flex-direction: column;
  }
  a {
    font-weight: normal;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.5);
  }
`;
