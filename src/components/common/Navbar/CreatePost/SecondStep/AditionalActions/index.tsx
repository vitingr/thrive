import { Collaborator } from '../../icons/Collaborator'
import { DropdownArrow } from '../../icons/DropdownArrow'
import { LocationPin } from '../../icons/LocationPin'
import { AditionalActionsProps } from './types'

export const AditionalActions: React.FC<AditionalActionsProps> = ({ copy }) => {
  return (
    <>
      <div className="flex cursor-pointer items-center justify-between">
        <p className="w-full text-sm text-slate-500">
          {copy.createPostForm.location}
        </p>
        <LocationPin className="text-slate-500" />
      </div>
      <div className="flex cursor-pointer items-center justify-between">
        <p className="w-full text-sm text-slate-500">
          {copy.createPostForm.collaborators}
        </p>
        <Collaborator className="text-slate-500" />
      </div>
      <div className="flex cursor-pointer items-center justify-between">
        <p className="w-full text-sm text-slate-500">
          {copy.createPostForm.configurations}
        </p>
        <DropdownArrow className="text-slate-500" />
      </div>
    </>
  )
}
