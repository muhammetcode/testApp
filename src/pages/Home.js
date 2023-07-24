import { Link } from "react-router-dom";
import { IoLogIn } from "react-icons/io5";
import Haryt from "./Haryt";

const Home = () => {
  const loginFunck = () => {
    window.location = "/login";
  };
  return (
    <>
      <section>
        <div className="flex absolute text-white ml-20 mt-3 text-3xl font-bold">
          DremTeam
        </div>
        <nav className="bg-[#393E46] text-white h-16 flex gap-4 items-center justify-end pr-14 shadow-lg">
          <Link className=" pr-3 pl-3 hover:bg-[#222831] h-16 flex items-center transition">
            Biz barada
          </Link>
          <Link className=" pr-3 pl-3 hover:bg-[#222831] h-16 flex items-center transition">
            Harytlar
          </Link>
          <Link className=" pr-3 pl-3 hover:bg-[#222831] h-16 flex items-center transition">
            Bolumler
          </Link>
          <Link className=" pr-3 pl-3 hover:bg-[#222831] h-16 flex items-center transition">
            Sapaklar
          </Link>{" "}
          <Link className=" pr-3 pl-3 mr-8 hover:bg-[#222831] h-16 flex items-center transition">
            Habarlasmak
          </Link>
          <button onClick={loginFunck}>
            <IoLogIn size={28} className="text-white" />
          </button>
        </nav>
      </section>
      <form>
        <Haryt />
      </form>
    </>
  );
};

export default Home;
