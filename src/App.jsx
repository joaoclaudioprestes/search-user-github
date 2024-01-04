import { useState } from "react";
import { GoPlus } from "react-icons/go";
import BoxUser from "./components/BoxUser/BoxUser";

function App() {
  const [user, setNewUser] = useState("");
  const [error, setError] = useState(null);
  const [dataUsers, setDataUsers] = useState([]);

  const handleSubmitNewUser = async (e) => {
    e.preventDefault();
    setNewUser("");
    setError(null);

    try {
      const userData = await useFetch(user);
      setDataUsers((prevDataUsers) => [...prevDataUsers, userData]);
    } catch (error) {
      setError(
        "Usuário não encontrado!"
      );
    }
  };

  async function useFetch(user) {
    const response = await fetch(`https://api.github.com/users/${user}`);
    if (!response.ok) {
      throw new Error("Erro ao buscar dados");
    }

    const data = await response.json();
    return data;
  }

  return (
    <>
      <div className="w-full h-[60px] flex justify-center items-center bg-[#121111] font-sans">
        <h1 className="font-bold text-[#e8eaea] text-lg">
          Pesquisar usuários do GitHub
        </h1>
      </div>
      <div className="flex flex-wrap p-[12px] gap-[10px] justify-center items-center font-sans">
        <div className="flex flex-col justify-center items-center w-[250px] p-[10px] rounded-[10px] bg-[#171515] h-[135px] gap-2 font-sans">
          <form
            className="flex flex-col gap-2 justify-center items-center"
            onSubmit={handleSubmitNewUser}
          >
            <label htmlFor="user" className="flex flex-col gap-1">
              <span className="text-white">Usuário:</span>
              <input
                type="text"
                placeholder="Digite o usuário"
                value={user}
                onChange={(e) => setNewUser(e.target.value)}
                className="rounded-[4px] outline-none px-1"
              />
            </label>
            <button
              className="w-[50px] h-[50px] flex justify-center items-center font- rounded-full bg-[#e8eaea] cursor-pointer"
              type="submit"
            >
              <GoPlus size={25} />
            </button>
          </form>
        </div>
        {dataUsers.length > 0 &&
          dataUsers.map((userData) => (
            <BoxUser
              key={userData.id}
              name={userData.name}
              repositories={userData.public_repos}
              avatar_url={userData.avatar_url} // Correção aqui
            />
          ))}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </>
  );
}

export default App;
