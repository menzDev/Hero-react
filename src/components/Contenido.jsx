import React from "react";

const Contenido = () => {
  return (
    <div className="contenido flex justify-between px-[16px] pt-[40px] lg:mt-[120px] lg:px-[32px]">
      <div className="contenido__izquierda w-full lg:w-[620px] h-auto">
        <div>
          <h1 className="w-full mb-[20px] text-[52px] lg:text-[70px] font-Nue">Always Track &  Analize Your Business  Statistcs To Suceed.</h1>
           <h2 className="text-[18px] mb-[40px]">A better way to manage your sales, team,clients & marketing  -- on a single platform.powerful, affordable & easy.  </h2> 
        </div>
        <div className="mb-[80px] flex">
            <input className="w-auto grow h-[52px]" type="text" />
            <button className="w-[144px] h-[52px] bg-[#151515] text-white px-[20px] py-[14px]">Get Started</button>
        </div>
      <img className="w-full h-auto" src="./public/Marcas.png" alt="" />
      </div>
      <div className="contenido__derecha hidden lg:block"><img className=" lg:w-[550px] h-auto" src="./persona_escalera.png" alt="" /></div>
    </div>
  );
};

export default Contenido;
