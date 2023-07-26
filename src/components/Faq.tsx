import FaqCard from './FaqCard';

const Faq = () => {
	return (
		<div className="w-6/12 h-full flex flex-col justify-center">
			<FaqCard order="order-1"title="Before Coding" text="Before coding, I like to plan the project" />
			<FaqCard order="order-2" title="My background outside coding" text="I have a background in law and order" />
			<FaqCard order="order-3" title="My coding background" text="I have a background in coding" />
			<FaqCard order="order-4" title="About Softskills" text="I have a background in softskills" />
		</div>
	);
}
export default Faq;