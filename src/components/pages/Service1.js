import React from 'react';

import {
	FeatureText,
	FeatureTitle,
	FeatureWrapper,
	FeatureColumn,
	FeatureImageWrapper,
	FeatureName,
	FeatureTextWrapper,
} from '../variables/Nature';

import { featuresData } from '../variables/Space';

const Features = () => {
	return (
		<section id="Tentang Kami" className='bg-[#008b8b] '>
			<div className=' w-full h-auto bg-about rounded-tl-[100px] rounded-br-[100px] pb-20 px-10'>
				<FeatureTextWrapper>
					<FeatureTitle className='text-black text-justify'>KAMI MELAYANI</FeatureTitle>
				</FeatureTextWrapper>
				<FeatureWrapper className='text-black'>
					{featuresData.map((el, index) => (
						<FeatureColumn key={index}>
							<FeatureImageWrapper >
								<img width='300px'
                                     height='300px'
                                src={el.Image} />
							</FeatureImageWrapper>
							<FeatureName  className='text-left'>{el.name}</FeatureName>
                            <div className='text-black text-justify'>
							<FeatureText >{el.description}</FeatureText>
                            </div>
						</FeatureColumn>
					))}
				</FeatureWrapper>
			</div>
		</section>
	);
};

export default Features;
