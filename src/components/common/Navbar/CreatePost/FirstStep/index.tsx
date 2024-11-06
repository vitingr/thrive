'use client'

import { UploadButton } from '@/components/common/UploadButton'
import { MediaIcon } from '../icons/Media'
import { FirstStepProps } from './types'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { uploadImage } from '@/utils/helpers/uploadImage'

export const FirstStep: React.FC<FirstStepProps> = ({
  setImageUrl,
  setCurrentStep
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleUploadImage = async (path: string) => {
    try {
      setIsLoading(!isLoading)
      const imagePath = await uploadImage({ imagePath: path })
      setImageUrl(imagePath.url)
    } catch (uploadImageError) {
      console.error('ERROR! An error occurred while adding the image')
    } finally {
      setIsLoading(!isLoading)
      setCurrentStep(1)
    }
  }

  return (
    <section className="flex w-full max-w-4xl justify-between rounded-md bg-white p-8 lg:p-16 xl:p-60">
      <article className="flex flex-col items-center gap-4">
        <MediaIcon />
        <p className="text-center text-sm lg:text-base">
          Insira fotos e vídeos aqui
        </p>
        <UploadButton
          isLoading={isLoading}
          setImagePath={setImageUrl}
          uploadImageAction={async (path: string) =>
            await handleUploadImage(path)
          }
        >
          Escolher imagem do computador
        </UploadButton>
      </article>
    </section>
  )
}
