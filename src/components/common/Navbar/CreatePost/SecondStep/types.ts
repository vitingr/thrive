import { User } from '@/types/models/user'
import { SetStateAction } from 'react'

export interface SecondStepProps {
  setCurrentStep: React.Dispatch<SetStateAction<number>>
  imageUrl: string
  userData: User
}
