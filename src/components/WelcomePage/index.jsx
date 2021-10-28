import "./style.css";
const WelcomePage = ({ user, setUser, setIsLoggedIn }) => {
  const HandleLogout = () => {
    setIsLoggedIn(false);
    setUser("");
  };
  return (
    <div>
      <h1>Bem-vindo, {user}</h1>
      <button className="button-logout" onClick={HandleLogout}>
        Sair
      </button>
    </div>
  );
};
export default WelcomePage;
