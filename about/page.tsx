import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <Image src="/placeholder.svg?height=400&width=300" alt="Your Name" width={300} height={400} className="rounded-lg shadow-md" />
        </div>
        <div className="md:w-2/3 md:ml-8">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="mb-4">
            Hello! I'm Juliana, an architect passionate about creating innovative and sustainable designs. With 5 years of experience, 
            I specialize in residential architecture, urban planning, sustainable design.
          </p>
          <p className="mb-4">
            My approach to architecture focuses on blending functionality with aesthetics, prioritizing sustainability, etc. 
            I believe that great architecture has the power to enhance people's lives and contribute positively to our communities and environment.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Architectural Design</li>
            <li>3D Modeling and Rendering</li>
            <li>Sustainable Design Practices</li>
            <li>Project Management</li>
            <li>Building Information Modeling (BIM)</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-2">Education</h2>
        
          <p>Bachelor of Science in Architecture, XY University , 2021</p>
        </div>
      </div>
    </div>
  )
}

