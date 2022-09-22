import React from 'react';

import {
	Container,
	Retweeted,
	RocketseatIcon,
	Body,
	Avatar,
	Content,
	Header,
	Dot,
	Description,
	ImageContent,
	Icons,
	Status,
	CommentIcon,
	RetweetIcon,
	LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
      <Container>
          <Retweeted>
            <RocketseatIcon />
            	Você retweetou
          	</Retweeted>

          <Body>
          	<Avatar />

            <Content>
							<Header>
								<strong>Guilherme de Assis</strong>
								<span>@guias12</span>
								<Dot />
								<time>27 de jun</time>

							</Header>

							<Description>
								Animo galera tudo vai melhorar depois da copa 2014

								<ImageContent />

								<Icons>
									<Status>
										<CommentIcon />
										18
									</Status>
									<Status>
										<RetweetIcon />
										18
									</Status>
									<Status>
										<LikeIcon />
										1000
									</Status>
								</Icons>
							</Description>
            </Content>
          </Body>
      </Container>
  );
}

export default Tweet;