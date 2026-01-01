import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <nav className="bg-black bg-gray-yellow h-50 text-white shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* <Link href="/">
          <Image
            src="/placeholder-logo.png" // Replace with the path to your logo
            alt="Blog Logo"
            width={100} // Adjust width and height as needed
            height={40}
            className="h-auto"
          />
        </Link> */}
        <div className="flex items-center space-x-4">
          {/* You can add more navigation links here if needed */}
          <Link href="/" className="hover:text-blue-400">
            Blog
          </Link>
          {/* Example: Add a link to a community page or GitHub */}
          {/* <Link href="#" className="hover:text-blue-400">Community</Link> */}
          {/* <Link href="#" className="hover:text-blue-400">GitHub</Link> */}
        </div>
      </div>
    </nav>
  )
} 