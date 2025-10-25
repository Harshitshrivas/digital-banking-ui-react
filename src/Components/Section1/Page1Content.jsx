import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1Content = (props) => {
  return (
    <div className='pb-20 pt-6 flex items-center gap-10 h-[90vh] px-18'>
        <Leftcontent />
        <Rightcontent users = {props.users}/>
    </div>
  )
}

export default Page1Content