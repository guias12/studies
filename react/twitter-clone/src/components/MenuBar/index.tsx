import React from 'react';

import Button from '../Button';

import { 
    Container,
    Topside,
    Logo,
    MenuButton,
    HomeIcon,
    BellIcon,
    EmailIcon,
    FavoriteIcon,
		ProfileIcon,
		Botside,
		Avatar,
		ProfileData,
		ExitIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
		<Container>
			<Topside>
				<Logo />
				<MenuButton>
					<HomeIcon />
					<span>Página Inicial</span>
				</MenuButton>

				<MenuButton>
					<BellIcon />
					<span>Notificações</span>
				</MenuButton>

				<MenuButton>
					<EmailIcon />
					<span>Mensagens</span>
				</MenuButton>

				<MenuButton>
					<FavoriteIcon />
					<span>Favoritos</span>
				</MenuButton>

				<MenuButton>
					<ProfileIcon className='active'/>
					<span>Perfil</span>
				</MenuButton>

				<Button>
					<span>Tweetar</span>
				</Button>
			</Topside>

			<Botside>
				<Avatar />
				<ProfileData>
					<strong>Guilherme de Assis</strong>
					<span>@guias12</span>					
				</ProfileData>

				<ExitIcon />
			</Botside>
		</Container>
  );
}

export default MenuBar;