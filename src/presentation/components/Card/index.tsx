import React, { useState } from "react";
import { Cup } from "../../../models/cupModel";
import { Race } from "../../../models/raceModel";

interface CardProps {
    cup:Cup;
    onClickRace:(race: Race) => void;
    className?:string
}

export default function Card ({cup, onClickRace, className}:CardProps) {
    const [disabled, setDisabled] = useState<boolean>(false);
    const cupImgSize = 50;
    const enterCard = new Audio("/assets/sound/switchMarioKart.mp3")

    return(
        <div id="card"
            className={`isolate aspect-video rounded-xl w-64 ${ disabled ? "bg-black/50" : "bg-white/50"} shadow-lg ring-1 ring-black/5 ${className}`}
            onMouseEnter={() => enterCard.play()}>
            <div id="cardHeader" className="grid grid-cols-4 gap-2">
                <img src={`/${cup.img}`} alt={cup.title} width={cupImgSize}  height={cupImgSize} onClick={() => {setDisabled(!disabled)}}/>
                <h2 className="title">{cup.title}</h2>
            </div>
            <div id="cardBody" className="grid grid-cols-2 gap-2 justify-items-center">
                {cup.races?.map(race =>
                    <button key={race.title}
                            disabled={disabled}
                            onClick={() => onClickRace(race)}
                            className={`rounded ${disabled ? " opacity-50" : "opacity-100 "} ${race.banned && " border-2 border-red-600" } ${race.picked && " border-2 border-green-600" }`}>
                        <img
                            src={race.thumbnail}
                            alt={race.title}
                            className={`${race.banned && " grayscale "} ${race.picked && " grayscale "}`}
                        />
                    </button>
                )}
            </div>
        </div>
    )
}
