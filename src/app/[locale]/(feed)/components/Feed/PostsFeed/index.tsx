import { PostCard } from '@/components/common/PostCard'

import { PostFeedProps } from './types'
import { instanceContent } from '@/instances/instanceContent'
import { getUserSession } from '@/utils/auth/getUserSession'
import { getLocale } from 'next-intl/server'

export const PostFeed: React.FC<PostFeedProps> = async () => {
  const user = await getUserSession()
  const locale = await getLocale()

  const { data: posts } = await instanceContent.posts.getPostsByLanguage({
    userId: user?.id || null,
    locale
  })

  return (
    <section className="flex w-full max-w-full flex-col gap-4">
      {JSON.stringify(posts)}
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
