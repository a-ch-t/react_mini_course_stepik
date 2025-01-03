function LoginStatus(isLoggedIn) {
  isLoggedIn = true;
  return isLoggedIn ? (
    <h1>Добро пожаловать!</h1>
  ) : (
    <h1>Пожалуйста, войдите в систему</h1>
  );
}
export default LoginStatus;
