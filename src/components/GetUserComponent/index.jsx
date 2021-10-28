import "./style.css";
const GetUserComponent = ({ user, setUser, setIsLoggedIn }) => {
  const HandleLogIn = () => {
    setIsLoggedIn(true);
  };
  return (
    <div>
      <input
        className="input__LoggedIn"
        placeholder="Insira seu nome"
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      ></input>
      <div>
        <button className="button__loggedIn" onClick={HandleLogIn}>
          Entrar
        </button>
      </div>
    </div>
  );
};
export default GetUserComponent;
