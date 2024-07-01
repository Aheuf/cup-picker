import { Cup } from "../models/cupModel";
import {
    AmsterdamDrift, AthensDash, BangkokRush, BerlinByways,
    BooLake, BowserCastle3, ChocoMontain, CoconutMall, DKMountain,
    DKSummit, DaisyCircuit, DaisyCruiser, KalimariDesert, KoopaCape,
    LondonLoop, LosAngelesLaps, MadridDrive, MapleTreeway, MarioCircuit3,
    MarioCircuitDS, MerryMountain, MoonviewHighway, MushroomGorge, NewYorkMinute,
    NinjaHideaway, ParisPromenade, PeachGardens, PiranhaPlantCove, RainbowRoad3DS,
    RiversidePark, RockRockMountain, RomeAvanti, RosalinaIceWorld, ShroomRidge,
    SingaporeSpeedway, SkyGarden, SkyHighSundae, SnowLand, SqueakyCleanSprint,
    SunsetWilds, SydneySprint, ToadCircuit, TokyoBlur, VancouverVelocity,
    WaluigiPinball, WaluigiStadium, WiiRainbowRoad, YoshiIsland
  } from "./dlcRaces";
  import {
    GCNDryDryDesert,SNESDonutPlains3,N64RoyalRaceway,
    DSDKJungle,DSNeoBowserCity,GBARebbonRoad,superBellSubway,bigBlue,
    GCNBabyPark,GBACheeseLand,wildWoods,animalCrossing,
    GCNYoshiCircuit,exiteBikeArena,dragonDriftway,muteCity,
    marioCircuit,toadHarbor,twistedMansion,shyGuyFall,
    DSWarioStadium,GCNSherbetLand,DSMusicPark,N64YoshiValley,
    DSTickTockClock,DSPiranhaPlantSlide,wiiGrumbleVolcano,N64RainbowRoad,
    marioKartStadium,waterPark,sweetSweetCanion,thwomp,
    wiiMooMooMeadown,GBAMarioCircuit,DSCheepCheepBeach,N64ToadTurnpike,
    cloudtopCruise,boneDryDunes,bowserCastle,rainbowRoad,
    sunshineAirport,dolphinShoals,electroDome,mount,
    wiiWarioGoldMine,SNESRainbowRoad,iceIceOutpost,HyruleCircuit
  } from "./nonDlcRaces";
  
  export const cups: Cup[] = [
    {
      img:"assets/cups/Acorn.webp",
      title:"Acorn",
      dlc:true,
      order:11,
      races:[RomeAvanti, DKMountain, DaisyCircuit, PiranhaPlantCove]
    },
    {
      img:"assets/cups/Banana.webp",
      title:"Banana",
      dlc:false,
      order:6,
      races:[GCNDryDryDesert,SNESDonutPlains3,N64RoyalRaceway,DSDKJungle]
    },
    {
      img:"assets/cups/Bell.webp",
      title:"Bell",
      dlc:false,
      order:12,
      races:[DSNeoBowserCity,GBARebbonRoad,superBellSubway,bigBlue]
    },
    {
      img:"assets/cups/Boomerang.webp",
      title:"Boomerang",
      dlc:true,
      order:8,
      races:[BangkokRush, MarioCircuitDS, WaluigiStadium, SingaporeSpeedway]
    },
    {
      img:"assets/cups/Cherry.webp",
      title:"Cherry",
      dlc:true,
      order:10,
      races:[LosAngelesLaps, SunsetWilds, KoopaCape, VancouverVelocity]
    },
    {
      img:"assets/cups/Crossing.webp",
      title:"Crossing",
      dlc:false,
      order:11,
      races:[GCNBabyPark,GBACheeseLand,wildWoods,animalCrossing]
    },
    {
      img:"assets/cups/Egg.webp",
      title:"Egg",
      dlc:false,
      order:9,
      races:[GCNYoshiCircuit,exiteBikeArena,dragonDriftway,muteCity]
    },
    {
      img:"assets/cups/Feather.webp",
      title:"Feather",
      dlc:true,
      order:9,
      races:[AthensDash, DaisyCruiser, MoonviewHighway, SqueakyCleanSprint]
    },
    {
      img:"assets/cups/Flower.webp",
      title:"Flower",
      dlc:false,
      order:2,
      races:[marioCircuit,toadHarbor,twistedMansion,shyGuyFall]
    },
    {
      img:"assets/cups/Fruit.webp",
      title:"Fruit",
      dlc:true,
      order:7,
      races:[AmsterdamDrift, RiversidePark, DKSummit, YoshiIsland]
    },
    {
      img:"assets/cups/GoldenDash.webp",
      title:"GoldenDash",
      dlc:true,
      order:1,
      races:[ParisPromenade, ToadCircuit, ChocoMontain, CoconutMall]
    },
    {
      img:"assets/cups/Leaf.webp",
      title:"Leaf",
      dlc:false,
      order:7,
      races:[DSWarioStadium,GCNSherbetLand,DSMusicPark,N64YoshiValley]
    },
    {
      img:"assets/cups/Lightning.webp",
      title:"Lightning",
      dlc:false,
      order:8,
      races:[DSTickTockClock,DSPiranhaPlantSlide,wiiGrumbleVolcano,N64RainbowRoad]
    },
    {
      img:"assets/cups/LuckyCat.webp",
      title:"LuckyCat",
      dlc:true,
      order:2,
      races:[TokyoBlur, ShroomRidge, SkyGarden, NinjaHideaway]
    },
    {
      img:"assets/cups/Moon.webp",
      title:"Moon",
      dlc:true,
      order:6,
      races:[BerlinByways, PeachGardens, MerryMountain, RainbowRoad3DS]
    },
    {
      img:"assets/cups/Mushroom.webp",
      title:"Mushroom",
      dlc:false,
      order:1,
      races:[marioKartStadium,waterPark,sweetSweetCanion,thwomp]
    },
    {
      img:"assets/cups/Propeller.webp",
      title:"Propeller",
      dlc:true,
      order:4,
      races:[SydneySprint, SnowLand, MushroomGorge, SkyHighSundae]
    },
    {
      img:"assets/cups/Rock.webp",
      title:"Rock",
      dlc:true,
      order:5,
      races:[LondonLoop, BooLake, RockRockMountain, MapleTreeway]
    },
    {
      img:"assets/cups/Shell.webp",
      title:"Shell",
      dlc:false,
      order:5,
      races:[wiiMooMooMeadown,GBAMarioCircuit,DSCheepCheepBeach,N64ToadTurnpike]
    },
    {
      img:"assets/cups/Special.webp",
      title:"Special",
      dlc:false,
      order:4,
      races:[cloudtopCruise,boneDryDunes,bowserCastle,rainbowRoad]
    },
    {
      img:"assets/cups/Spiny.webp",
      title:"Spiny",
      dlc:true,
      order:12,
      races:[MadridDrive, RosalinaIceWorld, BowserCastle3, WiiRainbowRoad]
    },
    {
      img:"assets/cups/Star.webp",
      title:"Star",
      dlc:false,
      order:3,
      races:[sunshineAirport,dolphinShoals,electroDome,mount]
    },
    {
      img:"assets/cups/Triforce.webp",
      title:"Triforce",
      dlc:false,
      order:10,
      races:[wiiWarioGoldMine,SNESRainbowRoad,iceIceOutpost,HyruleCircuit]
    },
    {
      img:"assets/cups/Turnip.webp",
      title:"Turnip",
      dlc:true,
      order:3,
      races:[NewYorkMinute, MarioCircuit3, KalimariDesert, WaluigiPinball]
    }
  ]