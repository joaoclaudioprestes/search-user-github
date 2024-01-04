const BoxUser = ({ name, repositories, avatar_url }) => {
  return (
    <div className="min-w-[220px] p-[20px] rounded-[10px] h-auto flex flex-col gap-2 bg-[#171515] font-sans">
      <img src={avatar_url} alt="" className="w-[50px] rounded-full" />
      <div className="text-[#e8eaea]">
        <p>Nome: {name}</p>
        <p>Repositórios: {repositories}</p>
      </div>
    </div>
  );
};

export default BoxUser;
