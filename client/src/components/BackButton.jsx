import {Link} from 'react-oruter-dom'


export const BackButton = ({ destination = '/' }) => {
  return (
    <div className='flex'>
        <Link to={destination}
        className="bg-blue-400 rounded-md text-white px-4 py-2 w-fit">
            Back
        </Link>
    </div>
  )
}
