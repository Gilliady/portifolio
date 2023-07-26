import Image from 'next/image';
import ProjectCard from './ProjectCard';
import TitlePresentation from './TitlePresentation';
import Logo from '../../public/next.svg';
import ServicesCard from './ServicesCard';
import AboutMe from './AboutMe';
import Faq from './Faq';
const MainContent = (): JSX.Element => {
	return (
		<main className="pt-10 w-full">
			<TitlePresentation />
			<section className="container mx-auto py-12">
				<div className="border-2 border-slate-300 rounded-xl relative px-4 py-12 flex flex-wrap justify-around">
					<Image
						src={Logo}
						width={100}
						height={100}
						alt="logo"
						className="absolute top-[25px] left-[25px]"
					/>
					<div
						className="w-full	flex flex-wrap p-4 justify-between items-center md:flex-nowrap"
					>
						<ProjectCard projectName='Projeto A' />
						<ProjectCard projectName='Projeto B' />
						<ProjectCard projectName='Projeto C	' />
					</div>
					<div className="flex items-center justify-center">
						<ProjectCard projectName='Projeto D' grow="grow-[0.1]" />
					</div>
				</div>
				<div className="w-full flex relative items-center justify-center flex-col">
					<p className=" w-full p-8">Services</p>
					<h2 className="text-4xl relative w-full flex flex-wrap">
						<p className="grow">
							{"Simplicity is the"}
						</p>
						<p>
							{" ultimate sophistication."}
						</p>
						{/* <section className="
							w-[55%] h-[75%] absolute text-transparent
							border-t-2 border-r-2 rounded-tr-full rounded-br-full animate-pulse border-black top-[20px] right-[-5px]"
						>
							{"_________________________________"}
						</section> */}
					</h2>
					<div className="flex w-full justify-around h-[40vh] md:h-[60vh]">
						<ServicesCard
							title="Front-End"
							description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
							icon={<Image src={Logo} alt="logo" width={300} height={200} />}
						/>
						<ServicesCard
							title="Back-End"
							description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
							icon={<Image src={Logo} alt="logo" width={300} height={200} />}
						/>
					</div>
				</div>
				<div className="w-full flex relative mt-20 items-center justify-between h-96">
					<AboutMe />
					<Faq />
					{/* <svg className="d-md-none position-absolute t-0 l-0 w-100 h-100" width="421" height="74" viewBox="0 0 421 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M210.5 37H19C9.05888 37 1 45.0589 1 55V55C1 64.9411 9.05887 73 19 73H210.5" stroke="#863B32" vector-effect="non-scaling-stroke" ></path>
          <path d="M211.5 37L402 37C411.941 37 420 28.9411 420 19V19C420 9.05888 411.941 1.00001 402 1.00001L211.5 1.00001" stroke="#863B32" vector-effect="non-scaling-stroke" ></path>
          <path d="M210.5 73H19C9.05887 73 1 64.9411 1 55C1 45.0589 9.05888 37 19 37H211.5L402 37C411.941 37 420 28.9411 420 19C420 9.05888 411.941 1.00001 402 1.00001L211.5 1.00001" stroke="#E96A35" stroke-width="1" vector-effect="non-scaling-stroke"></path> */}
        {/* </svg> */}
				</div>
			</section>
		</main>
	);
};
export default MainContent;