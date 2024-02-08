"use client";
import { useState } from "react";

const Tabuada = () => {
  const [num, setNum] = useState(10);

  const tab = () => {
    const arr = [];
    for (let i = 1; i <= 10; i++) {
      arr.push({
        numero1: num,
        numero2: i,
        resultado: num * i,
      });
    }

    return arr;
  };

  return (
    <div className="border w-[300px] flex flex-col items-center gap-3 p-3">
      <input
        type="number"
        onChange={(e) => setNum(Number(e.target.value))}
        className="w-full h-11 border border-white rounded-l-lg p-3 placeholder:p-3 placeholder:text-md"
        autoFocus
        placeholder="Informe um número aqui"
      />
      <div className="w-[80%]">
        {tab().map((result) => (
          <div key={result.numero2}>
            <span>{`${result.numero1} x ${result.numero2} = ${result.resultado}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabuada;
