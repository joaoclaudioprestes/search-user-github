import Menu from "./components/Menu/Menu";
import BoxUser from "./components/BoxUser/BoxUser";


function App() {

  return (
    <>
      <Menu />
      <div className="flex flex-wrap  p-[15px] gap-[10px] justify-center items-center">
        <BoxUser />
        <BoxUser />
        <BoxUser />
        <BoxUser addUser={true} />
      </div>
    </>
  );
}

export default App;
