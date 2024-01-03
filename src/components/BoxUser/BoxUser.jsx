import { GoPlus } from "react-icons/go";

const BoxUser = ({ addUser }) => {

  const card = (addUser) => {
    if (addUser) {
      return (
        <div className="flex justify-center items-center min-w-[150px] w-[250px] p-[10px] rounded-[10px] bg-[#171515] h-[135px]">
          
          <button className="w-[50px] h-[50px] flex justify-center items-center font- rounded-full bg-[#e8eaea] cursor-pointer">
            <GoPlus size={25} />
          </button>
        </div>
      );
    } else {
      return (
        <div className="min-w-[150px] w-[250px] p-[20px] rounded-[10px] min-h-[100px] h-[135px] flex flex-col gap-2 bg-[#171515]">
          <img src="vite.svg" alt="" className="w-[40px] rounded-full" />
          <div className="text-[#e8eaea]">
            <p>Nome:</p>
            <p>Repositórios:</p>
          </div>
        </div>
      );
    }
  };

  return <div>{card(addUser)}</div>;
};

export default BoxUser;
