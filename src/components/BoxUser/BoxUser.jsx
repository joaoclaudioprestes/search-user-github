
const BoxUser = () => {
  return (
    <div className="min-w-[150px] w-[250px] p-[20px] rounded-[10px] min-h-[100px] h-[135px] flex flex-col gap-2 bg-[#171515] font-sans">
          <img src="vite.svg" alt="" className="w-[40px] rounded-full" />
          <div className="text-[#e8eaea]">
            <p>Nome:</p>
            <p>Repositórios:</p>
          </div>
        </div>
  );
};

export default BoxUser;
