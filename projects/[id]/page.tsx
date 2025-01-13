import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const projects = [
  { 
    id: 1, 
    title: 'Modern Residence', 
    description: 'A sleek, minimalist home design that embraces open spaces and natural light.',
    imagePath: '/images/modern-residence.jpg',
    details: 'This modern residence features an open floor plan, floor-to-ceiling windows, and a seamless indoor-outdoor living experience. The use of sustainable materials and energy-efficient systems makes it an eco-friendly choice for the discerning homeowner.'
  },
  { 
    id: 2, 
    title: 'Urban Office Complex', 
    description: 'A sustainable office building in the heart of the city, featuring green terraces and energy-efficient systems.',
    imagePath: '/images/urban-office.jpg',
    details: 'This urban office complex is designed with sustainability in mind. It incorporates green terraces on multiple levels, providing employees with access to nature and improving air quality. The building's facade is equipped with smart shading systems to reduce energy consumption.'
  },
  { 
    id: 3, 
    title: 'Eco-Friendly School', 
    description: 'An innovative school design focused on sustainability, with solar panels and a rainwater harvesting system.',
    imagePath: '/images/eco-school.jpg',
    details: 'This eco-friendly school sets a new standard for educational facilities. It features extensive use of solar panels, a rainwater harvesting system, and natural ventilation. The design incorporates flexible learning spaces and outdoor classrooms to enhance the educational experience.'
  },
  { 
    id: 4, 
    title: 'Luxury Hotel', 
    description: 'A high-end hotel with panoramic views, featuring a unique curved facade and rooftop infinity pool.',
    imagePath: '/images/luxury-hotel.jpg',
    details: 'This luxury hotel boasts a striking curved facade that maximizes views for every room. The rooftop infinity pool offers guests an unparalleled experience with panoramic city views. The interior design combines modern elegance with local cultural elements.'
  },
  { 
    id: 5, 
    title: 'Community Center', 
    description: 'A versatile space designed to bring people together, with multi-purpose rooms and an outdoor amphitheater.',
    imagePath: '/images/community-center.jpg',
    details: 'This community center is designed to be a hub of activity for all ages. It features multi-purpose rooms that can be configured for various events, a state-of-the-art library, and an outdoor amphitheater for performances and gatherings. The building's design promotes accessibility and inclusivity.'
  },
  { 
    id: 6, 
    title: 'Sustainable Housing Development', 
    description: 'An eco-friendly residential complex with shared green spaces and energy-efficient apartments.',
    imagePath: '/images/sustainable-housing.jpg',
    details: 'This sustainable housing development combines modern living with eco-friendly practices. The complex features energy-efficient apartments, shared green spaces for community gardening, and a greywater recycling system. The design promotes a sense of community while minimizing environmental impact.'
  },
]

export default function Project({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === parseInt(params.id))

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <Link href="/projects" className="text-blue-500 hover:text-blue-600 mb-4 inline-block">
        ← Back to Projects
      </Link>
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image 
            src={project.imagePath} 
            alt={project.title} 
            width={800} 
            height={600} 
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <h2 className="text-2xl font-semibold mb-2">Project Details</h2>
          <p className="text-gray-800">{project.details}</p>
        </div>
      </div>
    </div>
  )
}

