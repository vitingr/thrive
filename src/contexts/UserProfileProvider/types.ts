import { Post } from "@/types/models/post";
import { User } from "@/types/models/user";
import { PropsWithChildren, SetStateAction } from "react";

export interface UserProfileContextProps {
  user: User
  currentSelectedTab: number
  setCurrentSelectedTab: React.Dispatch<SetStateAction<number>>
  myPosts: Post[]
}

export interface UserProfileProviderProps extends PropsWithChildren {
  user: User
  myCreatedPosts: Post[]
}
