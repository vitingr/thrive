'use client'

import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/toolkit/Button'
import { Modal } from '@/components/toolkit/Modal'
import { useState } from 'react'
import { EditProfileProps } from './types'
import { SettingInput } from './SettingInput'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { editProfileSchema } from './schema'
import { DatePicker } from '@/components/common/DatePicker'

export const EditProfile: React.FC<EditProfileProps> = ({ copy, locale }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(editProfileSchema({ locale }))
  })

  const onSubmit = async () => {
    return ''
  }

  return (
    <>
      <Button
        className="md:text-sm"
        variant="secondary"
        onClick={() => setIsOpen(true)}
      >
        {copy.editButton.label}
      </Button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="rounded-md bg-white px-6 py-12">
          <article className="flex w-full flex-col">
            <h2 className="text-xl font-semibold">{copy.title}</h2>
            <p className="text-sm text-slate-600">{copy.description}</p>
          </article>
          <div className="my-4 h-[1px] w-full bg-slate-200 lg:my-6" />
          <form className="flex w-full flex-col gap-4 lg:gap-6">
            <SettingInput copy={copy.name}>
              <input
                className="w-full rounded-md px-3 py-2 text-sm text-slate-600 outline-none ring-1 ring-slate-200 transition-all duration-300 focus:ring-indigo-500"
                maxLength={80}
                minLength={8}
                placeholder={copy.name.placeholder}
                spellCheck={false}
                type="text"
                {...register('name')}
                required
              />
            </SettingInput>
            <SettingInput copy={copy.dateOfBirth}>
              <DatePicker />
            </SettingInput>
            <SettingInput copy={copy.language}>
              <select
                className="w-full cursor-pointer rounded-md px-3 py-2 text-sm text-slate-600 outline-none ring-1 ring-slate-200 transition-all duration-300 placeholder:text-slate-400 focus:ring-indigo-500"
                {...register('name')}
                required
              >
                <option className="cursor-pointer text-sm" value="">
                  {copy.language.placeholder}
                </option>
                <option className="cursor-pointer text-sm" value="pt">
                  Português (BRA)
                </option>
                <option className="cursor-pointer text-sm" value="en">
                  English (USA)
                </option>
              </select>
            </SettingInput>
            <Button
              className="mt-4 min-w-full rounded-sm md:text-sm"
              variant="secondary"
            >
              {copy.button.label}
            </Button>
          </form>
        </div>
      </Modal>
    </>
  )
}
