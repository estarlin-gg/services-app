


export const Container = ({children}) => {
  return (
    <div className="p-4 w-full grid grid-cols-1 md:grid-cols-2 justify-center bg-sky-400">
      {children}
    </div>
  )
}

 export const Box = ({children}) => {
   return (
      <div className="box flex flex-col gap-4">
        {children}
      </div>
   )
}