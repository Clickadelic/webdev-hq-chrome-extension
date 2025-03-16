import { AiOutlineSearch } from "react-icons/ai";

const App = () => {
  return (
    <div className="min-h-screen bg-rotterdam bg-white/30 bg-cover p-0">
      <div className="min-h-screen backdrop-blur m-3 rounded-lg">
        <div className="max-w-[800px] mx-auto bg-white/30 backdrop rounded-md relative top-64 flex flex-row">
          <input
            type="text"
            className="w-full p-4 text-xl rounded-md"
            placeholder="Search..."
          />
          <button className="bg-blue-500 text-white px-6 rounded">
            <AiOutlineSearch size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
