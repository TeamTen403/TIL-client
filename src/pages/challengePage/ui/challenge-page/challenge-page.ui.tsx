import { ChallengeList } from '../challenge-list'

export function ChallengePage() {
  return (
    <div className="flex h-full w-full flex-col bg-[#F9FAFC]">
      <Header />
      <ChallengeList />
    </div>
  )
}

function Header() {
  return (
    <div className="sticky top-0 z-50 flex h-40 min-h-60 w-full items-center justify-center bg-white px-[24px]">
      <div className="flex w-full items-center justify-between">
        <div className="text-20 font-[700]">챌린지</div>
      </div>
    </div>
  )
}
