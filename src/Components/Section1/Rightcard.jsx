import Rightcardwork from './Rightcardwork'

const Rightcard = (props) => {
  return (
    <div className='h-full shrink-0 w-75 overflow-hidden relative rounded-4xl'>
     <img className='h-full w-full object-cover'  src={props.img} alt="" />
     <Rightcardwork colour={props.colour} id = {props.id} tag = {props.tag}/>



    </div>
    
  )
}

export default Rightcard