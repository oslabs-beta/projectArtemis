import { Import } from 'https://deno.land/x/aleph/mod.ts';
import React, { useState } from 'https://esm.sh/react';
import MenuBar from '../components/MenuBar.tsx';
import AnalyticsContainer from '../components/AnalyticsContainer.tsx';
import HamburgerDrop from '../components/HamburgerDrop.tsx';

export default function Home() {
	const [ state, setState ] = useState(true);
	return (
		<div className="container-gui">
			<Import from="../style/index.css" />
			{state ? <MenuBar state={state} setState={setState} /> : <HamburgerDrop state={state} setState={setState} />}
			<AnalyticsContainer />
		</div>
	);
}
