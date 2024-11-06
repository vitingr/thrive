import { Container } from '@/components/toolkit/Container'

import { PostFeed } from './PostsFeed'
import { Sidebar } from './Sidebar'
import { FeedProps } from './types'

export const Feed: React.FC<FeedProps> = () => {
  return (
    <Container
      as="section"
      className="flex justify-between gap-6 px-4 py-12 lg:gap-12 lg:py-20 xl:px-0"
      data-cid="homepage-feed"
    >
      <PostFeed />
      <Sidebar />
    </Container>
  )
}
