import Image from 'next/image';
import Logo from '../../public/next.svg';
const Header = (): JSX.Element => {
	return (
		<header className={`
			flex flex-row justify-between items-center w-full
			h-[72px]
		`}>
			<section>
				<Image
					src={Logo}
					alt="logo"
					width={200}
					height={200}
				/>
			</section>
			<nav className="grow flex justify-around ">
				<ul className={`
					w-4/12 flex flex-row justify-between items-center
				`}>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Projects</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
			</nav>
			<aside className=" grow-[0.1] flex flex-row justify-between items-center">
				<button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
					{"Contact me"}
				</button>
			</aside>
		</header>
	);
}
export default Header;