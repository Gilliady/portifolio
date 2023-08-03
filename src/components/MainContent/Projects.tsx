'use client';
import Image from 'next/image';
import Logo from '../../../public/next.svg';
import ProjectCard from './ProjectCard';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Transition } from '@headlessui/react';

const Projects = () => {
  const { ref: show, inView: showProjects } = useInView({
    threshold: 0.1,
  });
  useEffect(() => {
    if (showProjects) {
      console.log('show projects');
    }
  }, [showProjects]);

  return (
    <div className='h-[920px] w-full flex flex-col justify-around items-center'>
      <div className={`transition-all duration-[800ms] border-2 border-slate-700 min-h-[500px] ${!showProjects ? 'w-[50%]' : 'w-[70%] translate-y-12'} rounded-xl relative px-4 py-12 flex flex-wrap justify-around`}>
        <Image
          src={Logo}
          width={100}
          height={100}
          alt="logo"
          className="absolute top-[25px] left-[25px]"
        />

        <Transition
          show={showProjects}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100 w-full"
          leave="transition-opacity duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="flex flex-wrap p-4 justify-between items-center md:flex-nowrap"
          >
            <ProjectCard projectName='Projeto A' />
            <ProjectCard projectName='Projeto B' />
            <ProjectCard projectName='Projeto C	' />
          </div>
          <div className="flex items-center justify-center">
            <ProjectCard projectName='Projeto D' grow="grow-[0.1]" />
          </div>
        </Transition>

      </div>
      <span ref={show} className='' />
    </div>
  )
}
export default Projects;