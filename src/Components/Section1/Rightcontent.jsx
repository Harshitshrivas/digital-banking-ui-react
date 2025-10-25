import Rightcard from "./Rightcard"

const Rightcontent = (props) => {
  console.log(props.users);
  
  return (
    <div id="right"  className='h-full flex flex-nowrap rounded-4xl overflow-x-auto gap-10 p-5 w-2/3 '>
       {props.users.map(function(elem, idx){
        return <Rightcard key = {idx} colour = {elem.colour} id={idx} img={elem.img} tag={elem.tag} />
       })}
    </div>
  )
}

export default Rightcontent