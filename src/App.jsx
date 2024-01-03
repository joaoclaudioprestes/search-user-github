import { useEffect, useState } from "react";
import BoxUser from "./components/BoxUser/BoxUser";
import { GoPlus } from "react-icons/go";

function App() {
  const [user, setNewUser] = useState("");
  const [dataUser, setNewDataUser] = useState(null);

  const handleNewUser = (e) => {
    setNewUser(e.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      const data = await response.json();
      setNewDataUser(data);
      console.log(data);
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
      setNewDataUser(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchData();
  };

  return (
    <>
      <div className="w-full h-[60px] flex justify-center items-center bg-[#121111] font-sans">
        <h1 className="font-bold text-[#e8eaea] text-lg">
          Pesquisar usuários do GitHub
        </h1>
      </div>
      <div className="flex flex-wrap p-[15px] gap-[10px] justify-center items-center font-sans">
        <div className="flex flex-col justify-center items-center min-w-[150px] w-[250px] p-[10px] rounded-[10px] bg-[#171515] h-[135px] gap-2 font-sans">
          <form
            className="flex flex-col gap-2 justify-center items-center"
            onSubmit={handleSubmit}
          >
            <label htmlFor="user" className="flex flex-col gap-1">
              <span className="text-white">Usuário:</span>
              <input
                type="text"
                placeholder="Digite o usuário"
                value={user}
                onChange={handleNewUser}
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
      </div>
    </>
  );
}

export default App;
