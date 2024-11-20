import { Post } from "@/types/models/post";
import { User } from "@/types/models/user";

export interface UseLikeStatusData {
  post: Post
  user: User
}

export interface UseLikeStatusProps {
  payload: {
    post: Post
    user: User
  }
}
