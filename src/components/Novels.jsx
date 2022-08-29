import {React} from 'react'

//First Grp
const img1 = require("./assets/RAW-N.jpg")
const img2 = require("./assets/LCD-N.jpg")
const img3 = require("./assets/DDDFW-N.jpg")
const img4 = require("./assets/RVAP-N.jpg")
const img5 = require("./assets/RMEML-N.jpg")

//Second Grp
const img6 = require("./assets/RMMGMC-N.jpg")
const img7 = require("./assets/SRFGDB-N.jpg")
const img8 = require("./assets/BSFGWRC-N.jpg")
const img9 = require("./assets/RSWS-N.jpg")
const img10 = require("./assets/RBS-N.jpg")
const img11 = require("./assets/RMEML-N.jpg")



const Novels = () => {
  return (
    <div className='w-full my-10 px-3 font-serif flex flex-col'>

      <div className='max-w-[1240px] mx-auto flex flex-col sm:w-full' >

        <div className="sm:pt-10 text-xl text-orange-500">
          <p>China Antiga</p>
        </div>
        <div className="flex scroll-smooth overflow-x-auto items-center justify-between">

          <div className="bg-orange-300/30 p-5 m-5 rounded-lg text-center shadow-xl justify-between">
            <div className="px-2 object-cover text-orange-500 hover:cursor-pointer
            hover:text-orange-800/70">
              <img src={img1} alt="RAW" srcset="/" />
            </div>
            <div className="h-[165px] w-[160px] flex flex-col text-xs justify-between mt-2">
              <span className="px-2 text-orange-500 hover:text-orange-800/70 hover:cursor-pointer">Rebirth of a Abandoned Woman</span>
              <span className="px-2 text-orange-500 ">Autor: Yi Yi Lan Xi</span>
              <span className="px-2 text-orange-500 ">Tradutor: Chang'er</span>
              <span className="px-2 text-orange-500 ">334 Ch</span>
              <span className="px-2 text-orange-500 ">Status: Completo</span>
            </div>
          </div>

          <div className="bg-orange-300/30 p-5 m-5 rounded-lg text-center shadow-xl justify-between">
            <div className="px-2 object-cover text-orange-500 hover:cursor-pointer
            hover:text-orange-800/70">
              <img src={img2} alt="LCD" srcset="/" />
            </div>
            <div className="h-[165px] w-[160px] flex flex-col text-xs justify-between mt-2">
              <span className="px-2 text-orange-500 hover:text-orange-800/70 hover:cursor-pointer">Legend of Concubine’s Daughter</span>
              <span className="px-2 text-orange-500 ">Autor: Guan Xin Ze Luan</span>
              <span className="px-2 text-orange-500 ">Tradutor: Leila Lee</span>
              <span className="px-2 text-orange-500 ">220 Ch</span>
              <span className="px-2 text-orange-500 ">Status: Completo</span>
            </div>
          </div>

          <div className="bg-orange-300/30 p-5 m-5 rounded-lg text-center shadow-xl justify-between">
            <div className="px-2 object-cover text-orange-500 hover:cursor-pointer
            hover:text-orange-800/70">
              <img src={img3} alt="DDDFW" srcset="/" />
            </div>
            <div className="h-[165px] w-[160px] flex flex-col text-xs justify-between mt-2">
              <span className="px-2 text-orange-500 hover:text-orange-800/70 hover:cursor-pointer">Divine Doctor: Daughter of the First Wife</span>
              <span className="px-2 text-orange-500 ">Autor: Yang Shi Liu</span>
              <span className="px-2 text-orange-500 ">Tradutor: Dre Santos</span>
              <span className="px-2 text-orange-500 ">1.252 Ch</span>
              <span className="px-2 text-orange-500 ">Status: Completo</span>
            </div>
          </div>

          <div className="bg-orange-300/30 p-5 m-5 rounded-lg text-center shadow-xl justify-between">
            <div className="px-2 object-cover text-orange-500 hover:cursor-pointer
            hover:text-orange-800/70">
              <img src={img4} alt="RVAP" srcset="/" />
            </div>
            <div className=" h-[165px] w-[160px] flex flex-col text-xs justify-between mt-2">
              <span className="px-2 text-orange-500 hover:text-orange-800/70 hover:cursor-pointer">Rebirth Vicious Abandoned Princess</span>
              <span className="px-2 text-orange-500 ">Autor: Nan Men Qi</span>
              <span className="px-2 text-orange-500 ">Tradutor: Nadia Ohm</span>
              <span className="px-2 text-orange-500 ">505 Ch</span>
              <span className="px-2 text-orange-500 ">Status: Em Andamento</span>
            </div>
          </div>

          <div className="bg-orange-300/30 p-5 m-5 rounded-lg text-center shadow-xl justify-between">
            <div className="px-2 object-cover text-orange-500 hover:cursor-pointer
            hover:text-orange-800/70">
              <img src={img5} alt="RBS" srcset="/" />
            </div>
            <div className=" h-[165px] w-[160px] flex flex-col text-xs justify-between mt-2">
              <span className="px-2 text-orange-500 hover:text-orange-800/70 hover:cursor-pointer">The Rebirth of the Malicious Empress of Military Lineage</span>
              <span className="px-2 text-orange-500 ">Autor: Qian Shan Cha Ke</span>
              <span className="px-2 text-orange-500 ">Tradutor: Lou Xu</span>
              <span className="px-2 text-orange-500 ">235 Ch</span>
              <span className="px-2 text-orange-500 ">Status: Completo</span>
            </div>
          </div>

        </div>

      </div>

      <div className='max-w-[1240px] mx-auto flex flex-col sm:w-full'>
        <div className="p-4 text-xl text-orange-500">
          <p>Josei Novels</p>
        </div>
        <div className="flex scroll-smooth overflow-x-auto items-center justify-between" >

          <div className="bg-orange-300/30 p-5 m-5 rounded-lg text-center shadow-xl justify-between">
            <div className="px-2 object-cover text-orange-500 hover:cursor-pointer
            hover:text-orange-800/70">
              <img src={img6} alt="RMMGMC" srcset="/" />
            </div>
            <div className="h-[165px] w-[160px] flex flex-col text-xs justify-between mt-2">
              <span className="px-2 text-orange-500 hover:text-orange-800/70 hover:cursor-pointer">Rebirth to a Military Marriage: Good Morning Chief</span>
              <span className="px-2 text-orange-500 ">Autor: Brocade Star of Love</span>
              <span className="px-2 text-orange-500 ">Tradutor: Otavc</span>
              <span className="px-2 text-orange-500 ">2541 Ch</span>
              <span className="px-2 text-orange-500 ">Status: Completo</span>
            </div>
          </div>

          <div className="bg-orange-300/30 p-5 m-5 rounded-lg text-center shadow-xl justify-between">
            <div className="px-2 object-cover text-orange-500 hover:cursor-pointer
            hover:text-orange-800/70">
              <img src={img7} alt="SRFGDB" srcset="/" />
            </div>
            <div className="h-[165px] w-[160px] flex flex-col text-xs justify-between mt-2">
              <span className="px-2 text-orange-500 hover:text-orange-800/70 hover:cursor-pointer">Space and Rebirth: The Favored Genius Doctor and Businesswoman</span>
              <span className="px-2 text-orange-500 ">Autor: Nian Xiao Hua</span>
              <span className="px-2 text-orange-500 ">Tradutor: Ursula </span>
              <span className="px-2 text-orange-500 ">1436 Ch</span>
              <span className="px-2 text-orange-500 ">Status: Completo</span>
            </div>
          </div>

          <div className="bg-orange-300/30 p-5 m-5 rounded-lg text-center shadow-xl justify-between">
            <div className="px-2 object-cover text-orange-500 hover:cursor-pointer
            hover:text-orange-800/70">
              <img src={img8} alt="BSFGWRC" srcset="/" />
            </div>
            <div className="h-[165px] w-[160px] flex flex-col text-xs justify-between mt-2">
              <span className="px-2 text-orange-500 hover:text-orange-800/70 hover:cursor-pointer">Back to the Sixties: Farm, Get Wealthy & Raise the Cubs</span>
              <span className="px-2 text-orange-500 ">Autor: NanFangLiZhi & Southern Lychee</span>
              <span className="px-2 text-orange-500 ">Tradutor: Dre Santos</span>
              <span className="px-2 text-orange-500 ">701 Ch</span>
              <span className="px-2 text-orange-500 ">Status: Completo</span>
            </div>
          </div>

          <div className="bg-orange-300/30 p-5 m-5 rounded-lg text-center shadow-xl justify-between">
            <div className="px-2 object-cover text-orange-500 hover:cursor-pointer
            hover:text-orange-800/70">
              <img src={img9} alt="RSWS" srcset="/" />
            </div>
            <div className=" h-[165px] w-[160px] flex flex-col text-xs justify-between mt-2">
              <span className="px-2 text-orange-500 hover:text-orange-800/70 hover:cursor-pointer">Rebirth to the Sixties With Space</span>
              <span className="px-2 text-orange-500 ">Autor: Yu Ren Mei</span>
              <span className="px-2 text-orange-500 ">Tradutor: Chang'er</span>
              <span className="px-2 text-orange-500 ">1315 Ch</span>
              <span className="px-2 text-orange-500 ">Status: Completo</span>
            </div>
          </div>

          <div className="bg-orange-300/30 p-5 m-5 rounded-lg text-center shadow-xl justify-between">
            <div className="px-2 object-cover text-orange-500 hover:cursor-pointer
            hover:text-orange-800/70">
              <img src={img10} alt="RGW" srcset="/" />
            </div>
            <div className=" h-[165px] w-[160px] flex flex-col text-xs justify-between mt-2">
              <span className="px-2 text-orange-500 hover:text-orange-800/70 hover:cursor-pointer">Rebirth of a General's Wife</span>
              <span className="px-2 text-orange-500 ">Autor: Irish_Light</span>
              <span className="px-2 text-orange-500 ">Original</span>
              <span className="px-2 text-orange-500 "> 0 Ch</span>
              <span className="px-2 text-orange-500 ">Status: Registrada</span>
            </div>
          </div>

          <div className="bg-orange-300/30 p-5 m-5 rounded-lg text-center shadow-xl justify-between">
            <div className="px-2 object-cover text-orange-500 hover:cursor-pointer
            hover:text-orange-800/70">
              <img src={img11} alt="RBS" srcset="/" />
            </div>
            <div className=" h-[165px] w-[160px] flex flex-col text-xs justify-between mt-2">
              <span className="px-2 text-orange-500 hover:text-orange-800/70 hover:cursor-pointer">Reincarnation of The Businesswoman at School</span>
              <span className="px-2 text-orange-500 ">Autor: Warm Color Su</span>
              <span className="px-2 text-orange-500 ">Tradutor: Lex Xiao</span>
              <span className="px-2 text-orange-500 ">2686 Ch</span>
              <span className="px-2 text-orange-500 ">Status: Em Andamento</span>
            </div>
          </div>


        </div>


      </div>


    </div>
  )
}

export default Novels