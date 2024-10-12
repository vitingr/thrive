import Image from 'next/image'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import {
  IoBookmarkOutline,
  IoChatbubbleOutline,
  IoHeartOutline,
  IoShareOutline
} from 'react-icons/io5'

import { PostCardProps } from './types'

export const PostCard: React.FC<PostCardProps> = () => {
  return (
    <article className="flex flex-col gap-4 rounded-md bg-white py-4 shadow">
      <div className="flex w-full justify-between gap-8 px-4">
        <div className="flex w-full gap-4">
          <figure className="h-12 w-12">
            <Image
              alt="post-image"
              className="h-12 w-12 rounded-full object-cover selection:bg-transparent"
              height={410}
              src="https://imgsapp2.uai.com.br/app/noticia_133890394703/2014/10/24/191316/20141024115433322785a.jpg"
              width={615}
            />
          </figure>
          <article className="flex flex-col">
            <h2 className="text-sm lg:text-base">Sebastião Ferreira</h2>
            <p className="text-xs font-light text-slate-500 lg:text-sm">
              20 minutos atrás
            </p>
          </article>
        </div>
        <figure className="w-auto">
          <HiOutlineDotsHorizontal
            className="cursor-pointer"
            fill="#64748b"
            size={24}
          />
        </figure>
      </div>
      <p className="px-4 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, et quisquam
        culpa magni velit sit neque fugit corporis itaque fugiat accusamus
        accusantium veniam porro eos, vel similique aliquid quam praesentium?
      </p>
      <figure className="w-full max-w-full rounded-sm">
        <Image
          alt="post-image"
          className="rounded-sm selection:bg-transparent"
          height={3375}
          src="https://i.pinimg.com/originals/eb/65/b3/eb65b3db1e6f15fe01e59ee6d2dd64cd.jpg"
          width={6000}
        />
      </figure>
      <div className="flex w-full justify-between gap-8 px-4">
        <figure className="flex items-center gap-4">
          <IoHeartOutline className="cursor-pointer" fill="#64748b" size={24} />
          <IoShareOutline className="cursor-pointer" fill="#64748b" size={24} />
          <IoChatbubbleOutline
            className="cursor-pointer"
            fill="#64748b"
            size={24}
          />
        </figure>
        <figure className="flex items-center">
          <IoBookmarkOutline
            className="cursor-pointer"
            fill="#64748b"
            size={24}
          />
        </figure>
      </div>
    </article>
  )
}
