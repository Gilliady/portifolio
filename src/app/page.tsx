import Header from '@/components/Header'
import MainContent from '@/components/MainContent'
import Image from 'next/image'

export default function Home(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 md:px-8 pt-10">
      <Header />
      <MainContent />
    </main>
  )
}
