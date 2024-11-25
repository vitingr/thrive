import { LineColumnChart } from '@/components/common/Charts/LineColumChart'
import { Container } from '@/components/toolkit/Container'

export const Analytics: React.FC = () => {
  return (
    <Container
      as="section"
      className="animate__animated animate__fadeIn flex flex-col gap-4 rounded-[6px] bg-white px-6 py-8 lg:gap-8"
      data-cid="analytics-profile"
    >
      <div className="relative w-full rounded-[6px] border border-slate-300 bg-white p-4">
        <LineColumnChart />
      </div>
    </Container>
  )
}
