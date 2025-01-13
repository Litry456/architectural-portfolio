import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-between items-center">
          <li>
            <Link href="/" className="text-xl font-bold text-gray-800">
              Your Name
            </Link>
          </li>
          <li>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-800">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 hover:text-gray-800">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-800">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-800">
                  Contact
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

