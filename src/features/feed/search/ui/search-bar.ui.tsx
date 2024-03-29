import { Search } from '@mui/icons-material'

export function SearchBar() {
  return (
    <div className="flex w-full rounded-full bg-[#CCCCCC] p-8 my-16">
      <input className="w-full bg-transparent px-16 outline-none" />
      <Search />
    </div>
  )
}
