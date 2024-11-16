export const SkeletonHorizontalCard: React.FC = () => {
  return (
    <div className="flex w-full animate-pulse flex-col overflow-hidden rounded-sm bg-white lg:h-[142px] lg:flex-row">
      <div className="aspect-[16/9] h-full w-full bg-slate-200 lg:max-w-[250px]" />
      <div className="flex h-full w-full flex-col justify-between gap-6 p-4">
        <div className="flex justify-between">
          <div className="h-6 w-36 bg-slate-100" />
          <div className="h-6 w-8 bg-slate-100" />
        </div>
        <div className="flex justify-between gap-6">
          <div className="h-6 w-2/3 bg-slate-100" />
          <div className="h-6 w-40 bg-slate-100" />
        </div>
      </div>
    </div>
  )
}
