import Image from 'next/image'
import Link from 'next/link'

const projects = [
  { 
    id: 1, 
    title: 'Modern Residence', 
    description: 'A sleek, minimalist home design that embraces open spaces and natural light.',
    imagePath: '/images/modern-residence.jpg'
  },
  { 
    id: 2, 
    title: 'Urban Office Complex', 
    description: 'A sustainable office building in the heart of the city, featuring green terraces and energy-efficient systems.',
    imagePath: '/images/urban-office.jpg'
  },
  { 
    id: 3, 
    title: 'Eco-Friendly School', 
    description: 'An innovative school design focused on sustainability, with solar panels and a rainwater harvesting system.',
    imagePath: '/images/eco-school.jpg'
  },
  { 
    id: 4, 
    title: 'Luxury Hotel', 
    description: 'A high-end hotel with panoramic views, featuring a unique curved facade and rooftop infinity pool.',
    imagePath: '/images/luxury-hotel.jpg'
  },
  { 
    id: 5, 
    title: 'Community Center', 
    description: 'A versatile space designed to bring people together, with multi-purpose rooms and an outdoor amphitheater.',
    imagePath: '/images/community-center.jpg'
  },
  { 
    id: 6, 
    title: 'Sustainable Housing Development', 
    description: 'An eco-friendly residential complex with shared green spaces and energy-efficient apartments.',
    imagePath: '/images/sustainable-housing.jpg'
  },
]

export default function Projects() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image 
              src={project.imagePath} 
              alt={project.title} 
              width={400} 
              height={300} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-xl mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <Link href={`/projects/${project.id}`} className="text-blue-500 hover:text-blue-600">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

