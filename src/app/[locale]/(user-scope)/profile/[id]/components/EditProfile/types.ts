import { Messages } from "@/constants/internationalization/messages";

export interface EditProfileProps {
  copy: Messages['profile']['editProfile']
  locale: string
}

export interface UpdateProfileSchemaData {
  locale: string
}
