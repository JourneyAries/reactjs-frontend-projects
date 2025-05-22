export const Header = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <img className="rounded-full w-[100px] h-[100px]" src="avatar.png" />
      <div className="flex flex-col gap-y-1">
        <h1 className="text-2xl font-bold text-center text-slate-800">Christine Evelyn</h1>
        <h2 className="text-sm font-bold text-center text-violet-600">London, United Kingdom</h2>
      </div>
      <p className="text-sm italic text-center text-slate-500">Frontend Developer & Retro Gamer</p>
    </div>
  )
}

