import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'

// Define the directory where your blog posts are stored
const postsDirectory = path.join(process.cwd(), 'content/posts')

// Function to get the data for a single post
async function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  let fileContents
  try {
    fileContents = fs.readFileSync(fullPath, 'utf8')
  } catch (e) {
    // If the file doesn't exist, return null
    return null
  }

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Combine the data with the slug
  return {
    slug,
    ...matterResult.data,
    content: matterResult.content,
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.mdx$/, ''),
  }))
}

// Generate metadata for each post
export async function generateMetadata({ params }) {
  const postData = await getPostData(params.slug)

  if (!postData) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: postData.title,
    description: postData.description || 'Blog post',
  }
}

// The main page component for rendering a blog post
export default async function Post({ params }) {
  const postData = await getPostData(params.slug)

  // If the post is not found, show a 404 page
  if (!postData) {
    notFound()
  }

  // Render the MDX content using MDXRemote
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 prose">
      <MDXRemote source={postData.content} />
    </div>
  )
}