import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="font-[Roboto Mono] h-[100vh] w-full bg-[#ccc4f4] flex justify-center items-center">
      <div className="h-3/4 w-[90%] xl:w-3/4 bg-white rounded-2xl p-10 xl:p-20 flex">
        <div id="latest-chat" className="w-1/3">
          <div id="search-bar" className="flex justify-between mb-4">
            <input
              type="text"
              className="w-[80%] outline-0 text-lg"
              placeholder="Search"
            />
            <FaMagnifyingGlass size={22} />
          </div>
          <div id="threads" className="h-[100%] overflow-y-scroll no-scrollbar">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <div key={i} className="flex justify-between py-3">
                <div className="h-14 w-14 bg-slate-500 rounded-full"></div>
                <div className="w-1/2">
                  <span className="text-lg font-bold text-blue-800">
                    Ngoc Giau
                  </span>
                  <p className="text-xs text-gray-700">Hello Anh Toan!</p>
                </div>
                <div className="relative">
                  <span className="text-xs text-gray-700">Just now</span>
                  <p className="absolute right-0 text-center h-6 w-6 rounded-full bg-red-500 text-white">
                    3
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div id="chat-box" className="w-2/3"></div>
      </div>
    </main>
  );
}
