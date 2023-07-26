'use client';
import { FaAngleDown } from 'react-icons/fa';
import { Disclosure } from '@headlessui/react';
interface FaqCardProps {
	title: string;
	text: string;
	order: string;
};
const FaqCard = ({title, text, order}: FaqCardProps) => {
	return (
		<div className={`w-full border rounded-md my-2 relative ${order}`}>
			<Disclosure>
				{({ open }) => (
					<>
						<Disclosure.Button className="flex w-full justify-between rounded-lg 
				px-4 py-2 text-left text-sm font-medium text-orange-900
				focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
							<p>
							{title}
							</p>
							<FaAngleDown className={`${open
								? 'transform rotate-180 transition'
								: 'transition' } w-5 h-5 text-orange-900`} />
						</Disclosure.Button>
						<Disclosure.Panel>
							<p>
								{text}
							</p>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</div>
	)
};
export default FaqCard;