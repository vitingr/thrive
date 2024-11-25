import { Container } from '@/components/toolkit/Container'
import { getUserSession } from '@/utils/auth/getUserSession'

import { PostFeed } from './PostsFeed'
import { Sidebar } from './Sidebar'
import { ProfileMenu } from './Sidebar/ProfileMenu'
import { FeedProps } from './types'

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
