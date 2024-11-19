'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { Button } from '@/components/toolkit/Button'
import { DEFAULT_MESSAGES_ERRORS } from '@/constants/errors/defaultMessageErrors'
import { instanceContent } from '@/instances/instanceContent'

import { EmojiIcon } from '../icons/Emoji'
import { AditionalActions } from './AditionalActions'
import { PostContent, SecondStepProps } from './types'

export const SecondStep: React.FC<SecondStepProps> = ({
  imageUrl,
  setCurrentStep,
  userData,
  locale,
  copy
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
          DEFAULT_MESSAGES_ERRORS[locale].requiredNumberTooLarge
        )
      }

      if (contentLength === 0) {
        return toast.error(
          DEFAULT_MESSAGES_ERRORS[locale].requiredFieldTooSmall
        )
      }

      await instanceContent.posts.createPost({
        userId: userData.id,
        postContent,
        locale
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
          alt="New Post Image"
          className="w-full rounded-sm object-cover transition-all duration-300 group-hover:brightness-95"
          height={1920}
          src={imageUrl}
          width={1920}
        />
      </figure>
      <article className="flex w-full flex-col gap-4 p-6">
        <div className="flex items-center gap-2">
          <figure className="h-6 w-6 rounded-full lg:h-8 lg:w-8">
            <Image
              alt={userData.firstname}
              className="rounded-full"
              height={600}
              src={userData.profile_picture}
              width={600}
            />
          </figure>
          <p className="text-sm">{userData.username}</p>
        </div>
        <textarea
          autoComplete="off"
          className="min-h-20 resize-none bg-transparent text-sm text-slate-600 outline-0"
          id="post-content"
          onChange={e => handleEditPostContent(e.target.value, e)}
          placeholder={copy.createPostForm.content.placeholder}
          spellCheck={false}
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
          <AditionalActions copy={copy} />
          <Button
            className="mt-6 min-w-full md:text-sm"
            isLoading={isLoading}
            onClick={() => handleCreatePost()}
            variant="secondary"
          >
            {copy.createPostForm.publish}
          </Button>
        </article>
      </article>
    </section>
  )
}
