import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Architectural Portfolio</h1>
        <p className="text-xl mb-8">Innovative designs for modern living</p>
        <Link href="/projects" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
          View Projects
        </Link>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white shadow-md rounded-lg overflow-hidden">
              <Image src={`/placeholder.svg?height=300&width=400`} alt={`Project ${i}`} width={400} height={300} className="w-full" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Project {i}</h3>
                <p className="text-gray-600">Brief description of the project goes here.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

