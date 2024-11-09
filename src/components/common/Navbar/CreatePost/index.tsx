'use client'

import { useState } from 'react'
import { IoAddSharp } from 'react-icons/io5'

import { Modal } from '@/components/toolkit/Modal'

import { CreatePostProps } from './types'
import { SecondStep } from './SecondStep'
import { FirstStep } from './FirstStep'
import { ThirdStep } from './ThirdStep'

export const CreatePost: React.FC<CreatePostProps> = ({ userData }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [imageUrl, setImageUrl] = useState<string>('')

  const STEPS = [
    <FirstStep
      setImageUrl={setImageUrl}
      setCurrentStep={setCurrentStep}
      key="first-step"
    />,
    <SecondStep
      userData={userData}
      imageUrl={imageUrl}
      setCurrentStep={setCurrentStep}
      key="second-step"
    />,
    <ThirdStep setCurrentStep={setCurrentStep} key="third-step" />
  ]

  return (
    <>
      <button
        className="hidden w-full max-w-[100px] cursor-pointer items-center gap-2 rounded-full bg-blue-500 px-4 py-2 transition-all duration-300 hover:brightness-125 lg:flex"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        <IoAddSharp className="white-icon" fill="#f8fafc" size={20} />
        <p className="text-sm font-medium text-white">Criar</p>
      </button>

      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        onlyMobileFullScreen
      >
        {STEPS[currentStep]}
      </Modal>
    </>
  )
}
