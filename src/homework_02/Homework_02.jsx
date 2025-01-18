import ProfilCard from "../components/profilIdCard/ProfilCard";

const profile = [
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUJocHpY6Jzj9xHddXMTNeq753_Mbqc9XbxA&s",
    Name: "Harry",
    Lastname: "Potter",
    Job: "Wizard",
    Hobby: "Troublemaker",
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUJocHpY6Jzj9xHddXMTNeq753_Mbqc9XbxA&s",
    Name: "Ron",
    Lastname: "Wislye",
    Job: "Wizard",
    Hobby: "Friend",
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUJocHpY6Jzj9xHddXMTNeq753_Mbqc9XbxA&s",
    Name: "Hermiona",
    Lastname: "Granger",
    Job: "Witch",
    Hobby: "Braincracker",
  },
];

function HomeWork_02() {
  return (
    <div>
      {profile.map((profile, index) => (
        <ProfilCard
          key={index}
          avatar={profile.smile}
          Name={profile.Name}
          Lastname={profile.Lastname}
          Job={profile.Job}
          Hobby={profile.Hobby}
        />
      ))}
    </div>
  );
}
export default HomeWork_02;
