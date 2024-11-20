import {
  GoLink,
  GoMoveToEnd,
  GoPerson,
  GoProjectRoadmap,
  GoReport
} from 'react-icons/go'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { RiUserUnfollowLine } from 'react-icons/ri'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../../DropdownMenu'

export const PostDropdown: React.FC = () => {
  return (
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
            <p className="w-full cursor-pointer text-sm">Sobre esse conteúdo</p>
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
  )
}
