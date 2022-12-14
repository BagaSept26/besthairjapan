import React, { useEffect } from 'react';
import { Container } from '../variables/Data';
import {
	ContentSec,
	ContentRow,
	TextWrapper,
	Heading,
	Subtitle,
	ImgWrapper,
	Img,
	ContentColumn,
} from '../variables/Planets';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import Tilt from 'react-tilt';

const Content = ({
	headline,
	description,
	imeg,
	alt,
	backgroundColor,
	inverse,
	reverse,
	bigImage,
}) => {
	const initial = { opacity: 0, y: 30 };
	const transition = { delay: 0.3, duration: 0.6 };
	const animation = useAnimation();

	const { ref, inView } = useInView({
		threshold: 0.2,
	});

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				y: 0,
			});
		}
	}, [inView, animation]);

	return (
		<ContentSec ref={ref}>
			<Container>
				<ContentRow reverse={reverse}>
					<ContentColumn>
						<TextWrapper>
							
							<Heading
								initial={initial}
								transition={transition}
								animate={animation}
								inverse={inverse}
							>
								{headline}
							</Heading>
							<Subtitle
								initial={initial}
								transition={{ delay: 0.7, duration: 0.6 }}
								animate={animation}
								inverse={inverse}
							>
								{description}
							</Subtitle>

							
						</TextWrapper>
					</ContentColumn>
					<ContentColumn
						initial={initial}
						transition={transition}
						animate={animation}
						bigImage={bigImage}
					>
						<Tilt className="Tilt" options={{ max: 20, scale: 1.01, speed: 200 }}>
							<ImgWrapper backgroundColor={backgroundColor}>
								<Img
									src={imeg}
									alt={alt}
									whileHover={{ scale: 1.1 }}
									transition={{ duration: 0.5 }}
								/>
							</ImgWrapper>
						</Tilt>
					</ContentColumn>
				</ContentRow>
			</Container>
		</ContentSec>
	);
};

export default Content;
