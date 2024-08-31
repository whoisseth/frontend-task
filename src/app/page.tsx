import { UserFrom } from "./components/form";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className=" min-h-screen flex gap-5 flex-col">
      <Navbar />
      <div className=" max-w-5xl  px-2  w-full   mx-auto pb-5   ">
        <UserFrom />
      </div>
    </main>
  );
}
