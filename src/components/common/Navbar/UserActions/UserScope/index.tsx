import { GoHomeFill } from 'react-icons/go'
import { IoMail, IoNotificationsSharp } from 'react-icons/io5'

export const UserScope: React.FC = () => {
  return (
    <>
      <figure className="hidden cursor-pointer transition-all duration-300 hover:brightness-125 lg:flex">
        <GoHomeFill fill="#475569" size={20} />
      </figure>
      <figure className="hidden cursor-pointer transition-all duration-300 hover:brightness-125 lg:flex">
        <IoMail fill="#475569" size={20} />
      </figure>
      <figure className="hidden cursor-pointer transition-all duration-300 hover:brightness-125 lg:flex">
        <IoNotificationsSharp fill="#475569" size={20} />
      </figure>
    </>
  )
}
