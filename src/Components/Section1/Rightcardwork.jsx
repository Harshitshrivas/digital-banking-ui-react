const Rightcardwork = (props) => {
  return (
   <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between '>
 <h2 className='bg-white text-xl font-bold rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
 <div>
    <p className='text-lg leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eum, in obcaecati necessitatibus animi veritatis?</p>
    <div className='flex justify-between mt-4'>
        <button style={{backgroundColor:props.colour}} className=' text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
        <button className=' text-white font-medium px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
    </div>
 </div>
</div>
  )
}

export default Rightcardwork