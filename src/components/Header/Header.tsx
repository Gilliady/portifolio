'use client';
import { useEffect, useRef, useState } from 'react';
import Menu from './Menu';
import Logo from './Logo';
import Toggle from './Toggle';

const Header = (): JSX.Element => {
	const [isHidden, setIsHidden] = useState<boolean>(true);
	return (
		<header className='w-full'>
			<nav className="w-full flex justify-evenly">
				<div className="flex justify-between items-center w-full">
					<Logo />
					<Toggle setIsHidden={setIsHidden} />
					<Menu isHidden={isHidden} />
				</div>
			</nav>
		</header>
	);
}
export default Header;