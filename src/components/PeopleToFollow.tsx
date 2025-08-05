import UserCard from './UserCard';

function PeopleToFollow() {

const peopleToFollow = [
  { name: "Okeke Stephen", following: true },
  { name: "Wizkidayo", following: true },
  { name: "Aliko Dangote", following: false },
  { name: "Davido", following: false },
  { name: "Burna Boy", following: false },
  { name: "Elon Musk", following: true },
];

  return <div className="bg-black text-white p-4 rounded-lg shadow">
    <h3 className="font-semi-bold text-lg mb-4">People to follow</h3>
    <div className="space-y-4">
        {peopleToFollow.map((person, index) => (
            <UserCard key={index} person={person} />
        ))}
    </div>
  </div>
}

export default PeopleToFollow;