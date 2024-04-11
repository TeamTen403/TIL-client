export function Tag(props: { name: string }) {
  return (
    <div className=" rounded-[100px] border-1 border-[#FFA0A0] px-4 py-2 text-10 font-[700] text-[#FF7878]">
      {props.name}
    </div>
  )
}
