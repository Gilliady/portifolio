import Image from 'next/image';
import imagemPlaceholder from '../../../public/imagemPlaceholder.png';
interface ProjectCardProps {
	projectName: string;
	grow?: string;
}
const ProjectCard = ({ projectName, grow = 'grow' }: ProjectCardProps) => {
	return (
		<div className={`flex items-center mx-2 ${grow} min-w-[25%]`}>
			<Image
				src={imagemPlaceholder}
				alt={projectName}
				width={1080}
				className='rounded-md grow'
			/>
		</div>
	);
};
export default ProjectCard;