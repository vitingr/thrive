import { UserProfileProvider } from '@/contexts/UserProfileProvider'
import { instanceContent } from '@/instances/instanceContent'
import { getUserSession } from '@/utils/auth/getUserSession'

import { HeroProfile } from '../HeroProfile'
import { SelectedTabContent } from '../SelectedTabContent'

export const ProfileFeed: React.FC = async () => {
  const user = await getUserSession()

  const { data: myPosts } = await instanceContent.posts.getMyPosts({
    userId: user.id
  })

  return (
    <UserProfileProvider myCreatedPosts={myPosts} user={user}>
      <section className="flex w-full flex-col gap-4">
        <HeroProfile />
        <SelectedTabContent />
      </section>
    </UserProfileProvider>
  )
}
