import { SetStateAction } from 'react'

export interface SecondStepProps {
  setCurrentStep: React.Dispatch<SetStateAction<number>>
}
