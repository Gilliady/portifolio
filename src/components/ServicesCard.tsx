interface ServicesCardProps {
		title: string;
		description: string;
		icon: any;
}

const ServicesCard = ({ title, description, icon }: ServicesCardProps) => {
    return (
        <div className="flex flex-col items-center justify-center
				grow h-full p-4 m-4 bg-white rounded-lg
				shadow-orange-900 shadow-lg transition
				hover:-translate-y-3 hover:transition hover:duration-500">
            <div className="flex items-center justify-center min-w-16 min-h-16 mb-4 bg-indigo-100 rounded">
                {icon}
            </div>
            <h3 className="mb-2 text-xl font-bold">{title}</h3>
            <p className="text-center">{description}</p>
        </div>
    );
}
export default ServicesCard;