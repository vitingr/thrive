import { PostCard } from '@/components/common/PostCard'

import { PostFeedProps } from './types'

export const PostFeed: React.FC<PostFeedProps> = () => {
  return (
    <section className="flex w-full max-w-full flex-col gap-4">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </section>
  )
}
