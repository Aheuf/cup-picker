import React from "react";
import { Race } from "../../../models/raceModel";

interface ModalProps {
    races:Race[];
    sound:string;
}

export default function Modal({races, sound }:ModalProps){
    sound && new Audio(sound).play();
    return(
        <div className="grid grid-cols-1 place-items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div id="modal" className="relative isolate aspect-video rounded-xl w-1/2 bg-white/90 shadow-lg ring-1 ring-black/5 p-5">
                <h1 className="text-center text-5xl mb-8">🏆 Finale 🏆</h1>
                <div className="grid grid-cols-2 gap-4 justify-items-center">
                    {races.sort((a,b) => a.order - b.order).map(race => {
                    return (
                        <div className="flex grid grid-rows-1 justify-items-center">
                            <p className="text-3xl">{race.title}</p>
                            <img src={race.thumbnail} alt={race.title} className="rounded-lg w-64"/>
                        </div>
                    )
                    })}
                </div>
            </div>
        </div>
    )
}
