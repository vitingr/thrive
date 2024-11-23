'use client'

import { createContext, useContext, useState } from "react"
import { UserProfileContextProps, UserProfileProviderProps } from "./types"

const UserProfileContext = createContext<UserProfileContextProps>(null)

export const UserProfileProvider: React.FC<UserProfileProviderProps> = ({children, user}) => {
  const [currentSelectedTab, setCurrentSelectedTab] = useState<number>(0)

  return (
    <UserProfileContext.Provider value={{currentSelectedTab, setCurrentSelectedTab, user}}>
      {children}
    </UserProfileContext.Provider>
  )
}

export const useUserProfileContext = () => {
  return useContext(UserProfileContext)
}
