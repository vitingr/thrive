'use client'

import Image from 'next/image'
import { PostContent, SecondStepProps } from './types'
import { useEffect, useState } from 'react'
import { EmojiIcon } from '../icons/Emoji'
import { LocationPin } from '../icons/LocationPin'
import { Collaborator } from '../icons/Collaborator'
import { DropdownArrow } from '../icons/DropdownArrow'
import { Button } from '@/components/toolkit/Button'
import { toast } from 'react-toastify'
import { instanceContent } from '@/instances/instanceContent'

export const SecondStep: React.FC<SecondStepProps> = ({
  imageUrl,
  setCurrentStep,
  userData
}) => {
  const [contentLength, setContentLength] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [postContent, setPostContent] = useState<PostContent>({
    content: '',
    creator: userData,
    creator_id: userData.id,
    image_url: imageUrl,
    location: '',
    type: 'image',
    video_url: ''
  })

  function setPostContentValues<Key extends keyof PostContent>(
    key: Key,
    value: PostContent[Key]
  ) {
    setPostContent(prevContent => ({
      ...prevContent,
      [key]: value
    }))
  }

  const handleCreatePost = async () => {
    try {
      setIsLoading(true)

      if (contentLength > 2200) {
        return toast.error(
          'Não é possível criar uma postagem com mais de 2.200 caracteres.'
        )
      }

      await instanceContent.posts.createPost({
        creator: userData,
        postContent: postContent,
        locale: 'pt'
      })

      setCurrentStep(2)
    } catch (createPostError) {
      console.error(
        `ERROR! An error occurred while tried to create the post: ${createPostError}`
      )
    } finally {
      setIsLoading(false)
    }
  }

  const handleEditPostContent = async (text: string, e) => {
    setPostContentValues('content', text)
    setContentLength(e.target.value.length)
  }

  useEffect(() => {
    const textarea = document.getElementById('post-content')
    textarea?.focus()
  }, [])

  return (
    <section className="flex w-full min-w-full max-w-4xl justify-between rounded-md bg-white">
      <figure className="group min-h-full w-full cursor-zoom-in xl:max-w-3xl">
        <Image
          className="w-full rounded-sm object-cover transition-all duration-300 group-hover:brightness-95"
          src={imageUrl}
          alt="New Post Image"
          width={1920}
          height={1920}
        />
      </figure>
      <article className="flex w-full flex-col gap-4 p-6">
        <div className="flex items-center gap-2">
          <figure className="h-6 w-6 rounded-full lg:h-8 lg:w-8">
            <Image
              src={userData.profile_picture}
              alt={userData.firstname}
              className="rounded-full"
              width={600}
              height={600}
            />
          </figure>
          <p className="text-sm">{userData.username}</p>
        </div>
        <textarea
          className="min-h-20 resize-none bg-transparent text-sm text-slate-600 outline-0"
          autoComplete="off"
          spellCheck={false}
          onChange={e => handleEditPostContent(e.target.value, e)}
          placeholder="Digite o conteúdo da sua publicação aqui"
          id="post-content"
        />
        <div className="flex w-full items-center justify-between gap-2">
          <figure className="flex w-full items-center justify-start">
            <EmojiIcon className="cursor-pointer text-slate-500 transition-all duration-300 hover:text-slate-600" />
          </figure>
          <span className="flex w-full items-center justify-end">
            <p className="text-xs text-slate-500">{contentLength} / 2,200</p>
          </span>
        </div>
        <article className="mt-3 flex w-full flex-col gap-5">
          <div className="flex cursor-pointer items-center justify-between">
            <p className="w-full text-sm text-slate-500">
              Adicionar localização
            </p>
            <LocationPin className="text-slate-500" />
          </div>
          <div className="flex cursor-pointer items-center justify-between">
            <p className="w-full text-sm text-slate-500">
              Adicionar participantes
            </p>
            <Collaborator className="text-slate-500" />
          </div>
          <div className="flex cursor-pointer items-center justify-between">
            <p className="w-full text-sm text-slate-500">
              Configurações adicionais.
            </p>
            <DropdownArrow className="text-slate-500" />
          </div>
          <Button variant="secondary" className="mt-6 min-w-full md:text-sm">
            Publicar
          </Button>
        </article>
      </article>
    </section>
  )
}
