import React from "react";
import { Race } from "../../../models/raceModel";

interface ModalProps {
    races:Race[];
    className?:string
}

export default function Modal({races, className }:ModalProps){
    new Audio("/assets/sound/cupOK.mp3").play();
    return(
        <div id="modal" className={`isolate aspect-video rounded-xl w-1/2 bg-white/90 shadow-lg ring-1 ring-black/5 ${className}`}>
            <h1 className="title">🏆 Finale 🏆</h1><hr/>
            <div className="grid grid-cols-2 gap-4 justify-items-center">
                {races.sort((a,b) => a.order - b.order).map(race => {
                return (
                    <div>
                        <p className="name">{race.title}</p>
                        <img src={race.thumbnail} alt={race.title} className="rounded-lg finalRace"/>
                    </div>
                )
                })}
            </div>
        </div>
    )
}
