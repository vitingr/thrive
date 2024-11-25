import { getLocale } from 'next-intl/server'

import { PostCard } from '@/components/common/PostCard'
import { instanceContent } from '@/instances/instanceContent'
import { getUserSession } from '@/utils/auth/getUserSession'

import { PostFeedProps } from './types'
import { SkeletonHorizontalCard } from '@/components/skeletons/SkeletonHorizontalCard'
import { Post } from '@/types/models/post'

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
        <PostCard user={user} post={post} key={`${post.id}-${index}`} />
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
