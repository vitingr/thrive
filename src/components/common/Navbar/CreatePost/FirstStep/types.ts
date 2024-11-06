import { SetStateAction } from 'react'

export interface FirstStepProps {
  setCurrentStep: React.Dispatch<SetStateAction<number>>
  setImageUrl: React.Dispatch<SetStateAction<string>>
}
