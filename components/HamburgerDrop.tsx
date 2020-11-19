import React, { useState } from 'https://esm.sh/react';
import { Hamburger } from './Logos.tsx';

interface Props {
	setState: (Boolean: boolean) => void;
	state: boolean;
}

const HamburgerDrop = (props: Props) => {
	const [ characters, setCharacters ] = useState([ <h1>hello</h1>]);
	return (
		<div>
			<div onClick={() => props.setState(!props.state)}>
				<Hamburger />
			</div>
			<div className="hamburgerDrop">{characters}</div>
		</div>
	);
};

export default HamburgerDrop;
