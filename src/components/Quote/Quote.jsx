function Quote ({ title, author, role }) {
  return <div className='flex justify-center flex-col mx-auto text-center max-w-2xl'>
    <span className='font-serif font-black text-8xl'>“</span>
    <p className='font-light italic text-2xl -mt-10'>
      {title}
    </p>
    <p className='text-2xl mt-4'>{author}</p>
    <p>{role}</p>
  </div>
}

export default Quote
