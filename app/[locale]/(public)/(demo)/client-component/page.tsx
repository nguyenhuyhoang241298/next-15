'use client'

import fetcher from '@/lib/fetcher'
import { useEffect, useState } from 'react'

type Post = {
  id: number
  title: string
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[] | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetcher({
        path: '/posts',
      })
      const data = await res.json()

      setPosts(data as Post[])
    }
    fetchPosts()
  }, [])

  if (!posts) return <div>Loading...</div>

  return (
    <ul>
      {posts.map((post: { id: number; title: string }) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
