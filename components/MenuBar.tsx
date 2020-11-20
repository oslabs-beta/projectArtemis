import React from 'https://esm.sh/react';
import { MenuItems } from './menubar-container/MenuItems.tsx';
import { Hamburger, Git, Twit } from './Logos.tsx';
import HamburgerDrop from './HamburgerDrop.tsx';

interface Props {
	setState: (Boolean: boolean) => void;
	state: boolean;
}

const MenuBar = (props: Props) => {
	return (
		<div className="container-menubar">
			<div onClick={() => props.setState(!props.state)}>
				<Hamburger />
			</div>
			<div className="menubar-items_list-links">
				{/* maps over the array that holds our links for the menubar */}
				{MenuItems.map((item, index) => {
					return (
						<div key={index} style={{ marginTop: '10px' }}>
							<a className={item.cName} href={item.url}>
								{item.title}
							</a>
						</div>
					);
				})}
			</div>
			<div className="menubar-items_social-icons">
				<div className="social-icon">
					<Git  />
				</div>
				<div className="social-icon">
					<Twit className="social-icon" />
				</div>
			</div>
		</div>
	);
};

export default MenuBar;
