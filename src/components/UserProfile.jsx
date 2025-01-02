function UserProfile(props) {
  return (
    <>
      <h2>
        {props.name}: {props.age}
      </h2>
    </>
  );
}
export default UserProfile;
