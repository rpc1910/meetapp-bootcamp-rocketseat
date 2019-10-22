import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadProfileRequest } from '~/store/modules/user/actions';

import { Container, Content, Profile } from './styles';
import Logo from '../Logo';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function componentDidMount() {
    dispatch(loadProfileRequest());
  }

  useEffect(componentDidMount, []);

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <Logo minimal />
          </Link>
        </nav>
        {profile && (
          <aside>
            <Profile>
              <img src={profile.avatar.url} alt="" />
              <p>
                {profile.name} <Link to="/profile">Meu perfil</Link>
              </p>
            </Profile>
            <Link className="btn" to="/logout">
              Sair
            </Link>
          </aside>
        )}
      </Content>
    </Container>
  );
}
