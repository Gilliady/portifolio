import Header from '@/components/Header/Header';
import MainContent from '@/components/MainContent/MainContent';

export default function Home(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 md:px-8 pt-10">
      <Header />
      <MainContent />
    </main>
  )
}
