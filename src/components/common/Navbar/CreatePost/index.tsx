'use client'

import { useState } from 'react'
import { IoAddSharp } from 'react-icons/io5'

import { Modal } from '@/components/toolkit/Modal'

import { FirstStep } from './FirstStep'
import { SecondStep } from './SecondStep'
import { CreatePostProps } from './types'
import { Button } from '@/components/toolkit/Button'

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
      setCurrentStep={setCurrentStep}
      copy={copy}
      imageUrl={imageUrl}
      key="second-step"
      locale={locale}
      setIsModalOpen={setIsModalOpen}
      userData={userData}
      setImageUrl={setImageUrl}
    />
  ]

  return userData ? (
    <>
      <Button
        // className="hidden w-full max-w-[100px] cursor-pointer items-center gap-2 rounded-full bg-blue-500 px-4 py-2 transition-all duration-300 hover:brightness-125 lg:flex"
        variant="secondary"
        className="flex items-center gap-2 md:text-sm"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        <IoAddSharp className="white-icon" fill="#4b5563" size={20} />
        {copy.create}
      </Button>

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
