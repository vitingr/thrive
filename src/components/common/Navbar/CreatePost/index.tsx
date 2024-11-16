'use client'

import { useState } from 'react'
import { IoAddSharp } from 'react-icons/io5'

import { Modal } from '@/components/toolkit/Modal'

import { FirstStep } from './FirstStep'
import { SecondStep } from './SecondStep'
import { ThirdStep } from './ThirdStep'
import { CreatePostProps } from './types'

export const CreatePost: React.FC<CreatePostProps> = ({
  userData,
  copy,
  locale
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [imageUrl, setImageUrl] = useState<string>('')

  const MODAL_STEPS = [
    <FirstStep
      key="first-step"
      setCurrentStep={setCurrentStep}
      setImageUrl={setImageUrl}
    />,
    <SecondStep
      copy={copy}
      locale={locale}
      imageUrl={imageUrl}
      key="second-step"
      setCurrentStep={setCurrentStep}
      userData={userData}
    />,
    <ThirdStep key="third-step" setCurrentStep={setCurrentStep} />
  ]

  return userData ? (
    <>
      <button
        className="hidden w-full max-w-[100px] cursor-pointer items-center gap-2 rounded-full bg-blue-500 px-4 py-2 transition-all duration-300 hover:brightness-125 lg:flex"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        <IoAddSharp className="white-icon" fill="#f8fafc" size={20} />
        <p className="text-sm font-medium text-white">{copy.create}</p>
      </button>

      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        onlyMobileFullScreen
      >
        {MODAL_STEPS[currentStep]}
      </Modal>
    </>
  ) : null
}
