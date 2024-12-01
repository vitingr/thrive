import { SettingInputProps } from './types'

export const SettingInput: React.FC<SettingInputProps> = ({
  copy,
  children
}) => {
  return (
    <div className="flex w-full flex-col gap-1">
      <p className="text-sm font-semibold">{copy.title}</p>
      {children}
      <p className="text-xs text-slate-500">{copy.description}</p>
    </div>
  )
}
