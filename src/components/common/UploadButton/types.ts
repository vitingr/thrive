import { PropsWithChildren, SetStateAction } from 'react'

export interface UploadButtonProps extends PropsWithChildren {
  uploadImageAction: any
  isLoading: boolean
  setImagePath: React.Dispatch<SetStateAction<string>>
}
