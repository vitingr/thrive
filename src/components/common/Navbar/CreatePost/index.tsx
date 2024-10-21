'use client'

import { useState } from 'react'
import { IoAddSharp } from 'react-icons/io5'

import { Modal } from '@/components/toolkit/Modal'

import { CreatePostProps } from './types'

export const CreatePost: React.FC<CreatePostProps> = ({ userData }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <>
      <button
        className="flex w-full max-w-[100px] cursor-pointer items-center gap-2 rounded-full bg-blue-500 px-4 py-2 transition-all duration-300 hover:brightness-125"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        <IoAddSharp className="white-icon" fill="#f8fafc" size={20} />
        <p className="text-sm font-medium text-white">Criar</p>
      </button>

      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <div className="rounded-md bg-white px-4 pb-8 pt-16">testando</div>
      </Modal>
    </>
  )
}
