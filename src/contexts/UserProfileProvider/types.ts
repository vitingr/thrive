import { User } from "@/types/models/user";
import { PropsWithChildren, SetStateAction } from "react";

export interface UserProfileContextProps {
  user: User
  currentSelectedTab: number
  setCurrentSelectedTab: React.Dispatch<SetStateAction<number>>
}

export interface UserProfileProviderProps extends PropsWithChildren {
  user: User
}
