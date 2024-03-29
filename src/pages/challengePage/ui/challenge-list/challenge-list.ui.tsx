import { Challenge } from '../challenge'

export function ChallengeList() {
  return (
    <div className="flex w-full flex-col gap-16 overflow-scroll p-24">
      <Challenge />
      <Challenge />
      <Challenge />
    </div>
  )
}
