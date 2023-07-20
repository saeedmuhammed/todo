
export default function BoardOption({option="" , icon , bg='bg-white' , width="" , height=""}) {
    let style = `mx-2 ${bg} flex justify-center items-center gap-1 px-2 ${width} ${height} rounded-md border-solid border border-[#edf0ff]`;
  return (
    <div className={style}>
        {icon ? icon : ''}
        {option}
        </div>
  )
}
