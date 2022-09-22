import React from 'react';

import Feed from '../Feed';

import { 
    Container,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return(
    <Container>
        <Banner>
            <Avatar />
        </Banner>

        <ProfileData>
            <EditButton outlined>Editar perfil</EditButton>
            <h1>Guilherme de Assis</h1>
            <h2>@guias12</h2>
            <p>Musa fitness.</p>

            <ul>
                <li>
                    <LocationIcon />
                    B.H. State of Mind
                </li>
                <li>
                    <CakeIcon />
                    Nascido(a) em 20 de fev. de 1999
                </li>
            </ul>

            <Followage>
                <span>
                    seguindo <strong>301</strong>
                </span>
                <span><strong>373</strong> seguidores</span>
            </Followage>
        </ProfileData>

        <Feed />
    </Container>
  );
}

export default ProfilePage;