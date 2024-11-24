import { UserProfileProvider } from '@/contexts/UserProfileProvider'
import { HeroProfile } from '../HeroProfile'
import { getUserSession } from '@/utils/auth/getUserSession'
import { Analytics } from '../SelectedTabContent/Analytics'
import { SelectedTabContent } from '../SelectedTabContent'

export const ProfileFeed: React.FC = async () => {
  const user = await getUserSession()

  return (
    <UserProfileProvider user={user}>
      <section className='flex flex-col w-full gap-4'>
        <HeroProfile />
        <SelectedTabContent />
      </section>
    </UserProfileProvider>
  )
}
