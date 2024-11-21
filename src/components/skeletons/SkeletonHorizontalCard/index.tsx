export const SkeletonHorizontalCard: React.FC = () => {
  return (
    <article className="flex animate-pulse flex-col gap-4 rounded-md bg-white py-4 shadow">
      <div className="flex w-full justify-between gap-8 px-4">
        <div className="flex w-full gap-3">
          <div className="h-10 w-10 rounded-full bg-slate-200" />
          <div className="flex flex-col gap-2">
            <div className="h-4 w-32 bg-slate-200" />
            <div className="h-3 w-24 bg-slate-200" />
          </div>
        </div>
        <div className="h-6 w-6 rounded-full bg-slate-200" />
      </div>
      <div className="px-4">
        <div className="mb-2 h-4 w-3/4 bg-slate-200" />
        <div className="h-3 w-1/2 bg-slate-200" />
      </div>
      <div className="h-[210px] w-full max-w-full rounded-sm bg-slate-200" />
      <div className="flex gap-4 px-4 py-2">
        <div className="h-6 w-20 rounded-md bg-slate-200" />
        <div className="h-6 w-20 rounded-md bg-slate-200" />
        <div className="h-6 w-24 rounded-md bg-slate-200" />
      </div>
      <div className="w-full px-4 py-2">
        <div className="h-4 w-32 bg-slate-200" />
      </div>
    </article>
  )
}
