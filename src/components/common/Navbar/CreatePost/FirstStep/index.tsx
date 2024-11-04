'use client'

import { UploadButton } from '@/components/common/UploadButton'
import { MediaIcon } from '../icons/Media'
import { FirstStepProps } from './types'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { uploadImage } from '@/utils/helpers/uploadImage'

export const FirstStep: React.FC<FirstStepProps> = ({ setCurrentStep }) => {
  const [imageUrl, setImageUrl] = useState<string>('')

  const handleUploadImage = async (path: string) => {
    try {
      const imagePath = await uploadImage({ imagePath: path })
      setImageUrl(imagePath.url)
      toast.success('Imagem adicionada')
    } catch (uploadImageError) {
      console.error('ERROR! An error occurred while adding the image')
    }
  }

  return (
    <div className="flex w-full max-w-4xl justify-between rounded-md bg-white p-8 lg:p-16 xl:p-60">
      <article className="flex flex-col items-center gap-4">
        <MediaIcon />
        <p>Insira fotos e vídeos aqui</p>
        <p>Foto aqui: {imageUrl}</p>
        <UploadButton
          setImagePath={setImageUrl}
          uploadImageAction={async (path: string) =>
            await handleUploadImage(path)
          }
        >
          Escolher imagem do computador
        </UploadButton>
      </article>
    </div>
  )
}
