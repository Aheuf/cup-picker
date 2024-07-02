import React, { useState } from "react";
import Card from "../components/Card/index.tsx";
import { cups } from "../../data/cups.ts";
import Modal from "../components/Modal/index.tsx";
import { Race } from "../../models/raceModel.ts";

export default function Home() {
  const [banned, setBanned] = useState<Race[]>([]);
  const [picked, setPicked] = useState<Race[]>([]);

  const cupsNoDLC = cups.filter(cup => !cup.dlc);
  const cupsDLC = cups.filter(cup => cup.dlc);

  const pickAudio = new Audio("/assets/sound/pickMarioKart.mp3");
  const banAudio = new Audio("/assets/sound/banMarioKart.mp3");
  // const menuMusic = new Audio("/assets/sound/MainMenu.mp3");
  // menuMusic.volume = 0.05
  // menuMusic.loop = true;
  // menuMusic.play();

  const PlayerPick = (race:Race) => {
    if(banned.length === 8 && !picked.includes(race) && picked.length < 4 && !banned.includes(race)){
        pickAudio.play();
        race.picked = true;
        setPicked(picked => [...picked, race]);
    } else if(!banned.includes(race) && banned.length < 8 && !picked.includes(race)) {
        banAudio.play();
        race.banned = true;
        setBanned(banned => [...banned, race])
    }
  }


  return (
    <div id="page" className="grid grid-cols-12 justify-items-center">
      {picked.length === 4 && <Modal races={picked} sound="/assets/sound/cupOK.mp3"/>}
      {/* picked and banned */}
      <div className="col-span-12 grid grid-cols-2">
        <div className="isolate aspect-video rounded-xl bg-white/50 shadow-lg ring-1 ring-black/5 p-6 my-6 ml-6 h-64 w-11/12 overflow-auto">
          <h1 className="text-3xl">banned</h1>
          <hr/>
          <ul>
            {banned.map(race => <li className="text-2xl" key={race.title}>{race.title}</li>)}
          </ul>
        </div>
        <div className="isolate aspect-video rounded-xl bg-white/50 shadow-lg ring-1 ring-black/5 p-6 my-6 mr-6 h-64 w-11/12">
          <h1 className="text-3xl">picked</h1>
          <hr/>
          <ul>
            {picked.map(race => <li className="text-2xl" key={race.title}>{race.title}</li>)}
          </ul>
        </div>
      </div>

      {/* cups and races */}
      <div className="col-span-11 grid grid-cols-6 gap-4">
        {cupsNoDLC.sort((a,b) => a.order - b.order).map(cup => <Card key={cup.title} cup={cup} onClickRace={PlayerPick}/>)}
        {cupsDLC.sort((a,b) => a.order - b.order).map(cup => <Card key={cup.title} cup={cup} onClickRace={PlayerPick} />)}
      </div>
    </div>
  );
}