import { getLocale } from 'next-intl/server'

import { PostCard } from '@/components/common/PostCard'
import { SkeletonHorizontalCard } from '@/components/skeletons/SkeletonHorizontalCard'
import { instanceContent } from '@/instances/instanceContent'
import { Post } from '@/types/models/post'
import { getUserSession } from '@/utils/auth/getUserSession'

import { PostFeedProps } from './types'

export const PostFeed: React.FC<PostFeedProps> = async () => {
  const user = await getUserSession()
  const locale = await getLocale()

  const { data: posts } = await instanceContent.posts.getPostsByLanguage({
    userId: user.id,
    locale
  })

  return posts.data.length > 0 ? (
    <section className="flex w-full max-w-full flex-col gap-4">
      {posts.data.map((post: Post, index: number) => (
        <PostCard key={`${post.id}-${index}`} post={post} user={user} />
      ))}
    </section>
  ) : (
    <section className="flex w-full max-w-full flex-col gap-4">
      <SkeletonHorizontalCard />
      <SkeletonHorizontalCard />
      <SkeletonHorizontalCard />
      <SkeletonHorizontalCard />
      <SkeletonHorizontalCard />
      <SkeletonHorizontalCard />
    </section>
  )
}
