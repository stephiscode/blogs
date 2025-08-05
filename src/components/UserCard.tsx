import { FaUserCircle } from 'react-icons/fa';

type UserCardProp = {
  person: {
    name: string;
    following: boolean;
  };
};

function UserCard({person}: UserCardProp) {
 
  return (
    <div className='flex items-center justify-between'>
        <section className="flex items-center">
            <FaUserCircle className='text-3xl mr-3 text-gray-500' />
            <span>{person.name}</span>
        </section>

        <button className='bg-white text-black font-semibold p-2 mr-2 rounded-md'>{person.following ? "Following" : "Follow"}</button>
    </div>
  )
}

export default UserCard;