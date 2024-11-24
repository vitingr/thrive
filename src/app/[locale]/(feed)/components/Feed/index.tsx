import { Container } from '@/components/toolkit/Container'

import { PostFeed } from './PostsFeed'
import { Sidebar } from './Sidebar'
import { FeedProps } from './types'
import { ProfileMenu } from './Sidebar/ProfileMenu'
import { getUserSession } from '@/utils/auth/getUserSession'

export const Feed: React.FC<FeedProps> = async () => {
  const user = await getUserSession()

  return (
    <Container
      as="section"
      className="flex justify-between gap-4 py-6 lg:gap-8 lg:py-12 xl:px-0"
      data-cid="homepage-feed"
    >
      {user ? (
        <>
          <ProfileMenu />
          <PostFeed />
          <Sidebar />
        </>
      ) : null}
    </Container>
  )
}
