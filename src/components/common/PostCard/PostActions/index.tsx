'use client'

import axios from 'axios'
import { useState } from 'react'

import { useLikeStatus } from '@/hooks/swr/useLikeStatus'

import { Comment } from '../icons/Comment'
import { FillFavourite } from '../icons/FillFavourite'
import { FillHeart } from '../icons/FillHeart'
import { OutlineFavourite } from '../icons/OutlineFavourite'
import { OutlineHeart } from '../icons/OutlineHeart'
import { Share } from '../icons/Share'
import { PostActionsProps } from './types'

export const PostActions: React.FC<PostActionsProps> = ({ post, user }) => {
  const [favouritedPost, setFavouritedPost] = useState<boolean>(false)

  const { likeStatus , mutate } = useLikeStatus({
    payload: { post }
  })

  const handleLikePost = async () => {
    await axios.post('/api/posts/like-post-by-id', {
      postId: post.id,
      userId: user.id
    })
  }

  const handleDeslikePost = async () => {
    await axios.post('/api/posts/deslike-post-by-id', {
      postId: post.id,
      userId: user.id
    })
  }

  const handleLikeButtonClick = async () => {
    const newLikes = likeStatus.user_liked
      ? likeStatus.number_likes - 1
      : likeStatus.number_likes + 1

    try {
      likeStatus.user_liked ? await handleDeslikePost() : await handleLikePost()

      await mutate({
        number_likes: newLikes,
        user_liked: !likeStatus.user_liked
      })
    } catch (handleLikePostErr) {
      console.error(handleLikePostErr)
      await mutate(
        {
          number_likes: likeStatus.number_likes,
          user_liked: likeStatus.user_liked
        },
        false
      )
    }
  }

  return (
    <>
      <div className="flex w-full justify-between gap-8 px-4">
        <figure className="flex items-center gap-4 lg:gap-5">
          {likeStatus.user_liked ? (
            <button onClick={() => handleLikeButtonClick()}>
              <FillHeart className="animate__animated animate__fadeIn h-4 w-4 cursor-pointer text-blue-500 transition-all duration-300 hover:brightness-125 lg:h-5 lg:w-5" />
            </button>
          ) : (
            <button onClick={() => handleLikeButtonClick()}>
              <OutlineHeart className="animate__animated animate__fadeIn h-4 w-4 cursor-pointer text-slate-600 transition-all duration-300 hover:text-blue-500 lg:h-5 lg:w-5" />
            </button>
          )}
          <Comment className="h-4 w-4 cursor-pointer text-slate-600 transition-all duration-300 hover:text-blue-500 lg:h-5 lg:w-5" />
          <Share className="h-4 w-4 cursor-pointer text-slate-600 transition-all duration-300 hover:text-blue-500 lg:h-5 lg:w-5" />
        </figure>
        <figure className="flex items-center">
          {favouritedPost ? (
            <button onClick={() => setFavouritedPost(false)}>
              <FillFavourite className="animate__animated animate__fadeIn h-4 w-4 cursor-pointer text-blue-500 transition-all duration-300 hover:brightness-125 lg:h-5 lg:w-5" />
            </button>
          ) : (
            <button onClick={() => setFavouritedPost(true)}>
              <OutlineFavourite className="animate__animated animate__fadeIn h-4 w-4 cursor-pointer text-slate-600 transition-all duration-300 hover:text-blue-500 lg:h-5 lg:w-5" />
            </button>
          )}
        </figure>
      </div>
      <p className="w-full px-4 text-sm text-slate-600">
        {likeStatus.number_likes || 0} curtida
        {likeStatus.number_likes > 0 ? 's' : ''}
      </p>
    </>
  )
}
