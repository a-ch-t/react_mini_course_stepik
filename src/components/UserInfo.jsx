function UserInfo(props) {
  return props.isAdmin ? <h1>Администратор</h1> : <h1>Обычный пользователь</h1>;
}
export default UserInfo;
