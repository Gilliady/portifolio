'use client'
import FaqCard from './FaqCard';

const Faq = () => {
	return (
		<div className="w-6/12 h-full flex flex-col justify-start">
			<FaqCard title="Before Coding" text="Before coding, I like to plan the project" />
			<FaqCard title="My background outside coding" text="I have a background in law and order" />
			<FaqCard title="My coding background" text="I have a background in coding" />
			<FaqCard title="About Softskills" text="I have a background in softskills" />
		</div>
	);
}
export default Faq;