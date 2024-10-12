import { SidebarProps } from './types'

export const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <aside className="sticky inset-0 top-28 h-full w-full max-w-xs">
      <div className="max-h-[420px] w-full max-w-xs rounded-md bg-white px-4 py-8">
        Sidevbar
      </div>
    </aside>
  )
}
