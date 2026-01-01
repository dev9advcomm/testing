import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12 prose">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">My Blog</h1>
        
        <div className="grid gap-8">
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643"
                alt="Blog header"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                <Link href="/posts/hello-world" className="hover:text-blue-600">
                  Hello World - My First Blog Post
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">
                Welcome to my first blog post using MDX and Next.js
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>March 20, 2024</span>
                <span className="mx-2">•</span>
                <span>Your Name</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}
