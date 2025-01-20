import "./UserCard.css";

function UserCard({name, age, hobby}) {
 
  return (
    <div className="userCard">
      <h4>Name: {name}</h4>
      <p>Age: {age}</p>
      {/* {props.hobby && (<p>Hobby: {props.hobby}</p>)} */}
      {hobby ? <p>Hobby: {hobby}</p> : <p>No hobby</p>}
    </div>
  );
}

export default UserCard;
