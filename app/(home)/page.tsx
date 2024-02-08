import Tabuada from "../components/Tabuada";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col gap-3">
      <span className="text-xl font-bold uppercase text-center">
        Informe um numero e veja sua tabuada
      </span>
      <div>
        <Tabuada />
      </div>
    </div>
  );
}
