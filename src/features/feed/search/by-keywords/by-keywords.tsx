import { Search } from '@mui/icons-material'

export function SearchBar() {
  return (
    <div className="flex  w-full bg-white px-24 pb-24">
      <div className="flex w-full justify-between border-b-2 border-[#6B6B6B] px-8 py-12">
        <input
          className="w-full bg-transparent text-16 leading-24 outline-none placeholder:text-[#BABABA]"
          placeholder="검색어를 입력하세요"
        />
        <Search />
      </div>
    </div>
  )
}
