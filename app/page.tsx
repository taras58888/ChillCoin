import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Tokenomics from './components/Tokenomics'
import Community from './components/Community'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white">
      <Navbar />
      <main>
        <Hero />
        <Tokenomics />
        <Community />
      </main>
      <Footer />
    </div>
  )
}

