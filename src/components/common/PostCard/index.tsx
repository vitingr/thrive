import Image from 'next/image'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'

import { PostCardProps } from './types'

import { RiUserUnfollowLine } from 'react-icons/ri'
import { OutlineHeart } from './icons/OutlineHeart'
import { Comment } from './icons/Comment'
import { Share } from './icons/Share'
import { OutlineFavourite } from './icons/OutlineFavourite'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../DropdownMenu'

import {
  GoReport,
  GoLink,
  GoPerson,
  GoMoveToEnd,
  GoProjectRoadmap
} from 'react-icons/go'

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
        <DropdownMenu>
          <DropdownMenuTrigger>
            <figure className="w-auto outline-none">
              <HiOutlineDotsHorizontal
                className="cursor-pointer outline-none"
                fill="#64748b"
                size={24}
              />
            </figure>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <div className="flex w-full items-center gap-3 border-b border-slate-300 py-2 pl-1 pr-4">
                <GoReport className="red-icon" size={20} />
                <p className="w-full cursor-pointer text-sm font-medium text-red-500">
                  Reportar
                </p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex w-full items-center gap-3 border-b border-slate-300 pb-2 pl-1 pr-4">
                <RiUserUnfollowLine className="red-icon" size={20} />
                <p className="w-full cursor-pointer text-sm font-medium text-red-500">
                  Unfollow
                </p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex w-full items-center gap-3 border-b border-slate-300 pb-2 pl-1 pr-4">
                <GoMoveToEnd className="slate-icon" size={20} />
                <p className="w-full cursor-pointer text-sm">Ir para o post</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex w-full items-center gap-3 border-b border-slate-300 pb-2 pl-1 pr-4">
                <GoLink className="slate-icon" size={20} />
                <p className="w-full cursor-pointer text-sm">Copiar Link</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex w-full items-center gap-3 border-b border-slate-300 pb-2 pl-1 pr-4">
                <GoProjectRoadmap className="slate-icon" size={20} />
                <p className="w-full cursor-pointer text-sm">
                  Sobre esse conteúdo
                </p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex w-full items-center gap-3 pb-2 pl-1 pr-4">
                <GoPerson className="slate-icon" size={20} />
                <p className="w-full cursor-pointer text-sm">
                  Ir para conta do criador do post
                </p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
        <figure className="flex items-center gap-4 lg:gap-5">
          <OutlineHeart className="h-4 w-4 cursor-pointer text-slate-600 transition-all duration-300 hover:text-blue-500 lg:h-5 lg:w-5" />
          <Comment className="h-4 w-4 cursor-pointer text-slate-600 transition-all duration-300 hover:text-blue-500 lg:h-5 lg:w-5" />
          <Share className="h-4 w-4 cursor-pointer text-slate-600 transition-all duration-300 hover:text-blue-500 lg:h-5 lg:w-5" />
        </figure>
        <figure className="flex items-center">
          <OutlineFavourite className="h-4 w-4 cursor-pointer text-slate-600 transition-all duration-300 hover:text-blue-500 lg:h-5 lg:w-5" />
        </figure>
      </div>
    </article>
  )
}
