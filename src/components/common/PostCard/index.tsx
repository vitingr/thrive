import Image from 'next/image'

import { PostActions } from './PostActions'
import { PostCardProps } from './types'
import { PostDropdown } from './PostDropdown'

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article className="flex flex-col gap-4 rounded-md bg-white py-4 shadow">
      <div className="flex w-full justify-between gap-8 px-4">
        <div className="flex w-full gap-3">
          <figure className="h-10 w-10">
            <Image
              alt={post.creator.username}
              className="h-10 w-10 rounded-full object-cover selection:bg-transparent cursor-pointer transition-all duration-300 hover:brightness-125"
              height={410}
              src={post.creator.profile_picture}
              width={615}
            />
          </figure>
          <article className="flex flex-col">
            <h2 className="text-sm lg:text-base">{post.creator.firstname} {post.creator.lastname}</h2>
            <p className="text-xs font-light text-slate-500 lg:text-sm">
              20 minutos atrás
            </p>
          </article>
        </div>
        <PostDropdown />
      </div>
      <p
        className="px-4 text-sm"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <figure className="w-full max-w-full rounded-sm">
        <Image
          alt="Post Hero Image"
          className="max-h-[420px] rounded-sm object-cover selection:bg-transparent"
          height={3375}
          src={post.image_url}
          width={6000}
        />
      </figure>
      <PostActions />
      <p className="w-full px-4 text-sm text-slate-600">{post.number_likes || 0} curtidas</p>
    </article>
  )
}
