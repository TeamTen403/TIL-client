type Props = {
  title: string
}
export function MainLayoutHeader(props: Props) {
  const { title } = props
  return (
    <div className="sticky top-0 flex w-full items-center justify-center bg-[#D9D9D9] py-10 text-18 font-bold">
      {title}
    </div>
  )
}
