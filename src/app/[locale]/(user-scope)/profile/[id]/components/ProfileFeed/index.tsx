import { UserProfileProvider } from "@/contexts/UserProfileProvider"
import { HeroProfile } from "../HeroProfile"
import { getUserSession } from "@/utils/auth/getUserSession"

export const ProfileFeed: React.FC = async () => {
  const user = await getUserSession()

  return (
    <UserProfileProvider user={user}>
      <HeroProfile />
    </UserProfileProvider>
  )
}
