function Button({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="mt-32 w-full rounded-[8px] bg-[#FF5656] py-10 text-16 font-[700] leading-22 text-white"
    >
      {children}
    </button>
  )
}

export default Button
