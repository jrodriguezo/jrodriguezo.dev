function Iframe ({ src, title }) {
  return (
    <div className='mx-auto max-w-3xl'>
      <iframe
        className='w-full min-h-[300px] aspect-video'
        src={src}
        title={title}
      />
    </div>
  )
}

export default Iframe
