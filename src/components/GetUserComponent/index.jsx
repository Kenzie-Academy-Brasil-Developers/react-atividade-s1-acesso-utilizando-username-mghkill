import "./style.css";
const GetUserComponent = ({ user, setUser, setIsLoggedIn }) => {
  const HandleLogIn = () => {
    setIsLoggedIn(true);
  };
  return (
    <div>
      <form action="" method="get">
        <input
          className="input__LoggedIn"
          placeholder="Insira seu nome"
          type="text"
          id="userName"
          name="userName"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        ></input>
        <button className="button__loggedIn" onClick={HandleLogIn}>
          Entrar
        </button>
      </form>
    </div>
  );
};
export default GetUserComponent;
