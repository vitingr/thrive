import { PropsWithChildren, SetStateAction } from 'react'

export interface UploadButtonProps extends PropsWithChildren {
  uploadImageAction: any
  setImagePath: React.Dispatch<SetStateAction<string>>
}
