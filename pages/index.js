import { DownloadCLA } from "../components/index/DownloadCLA";
import HeroSection from "../components/index/HeroSection";
import GameIdea from "../components/index/GameIdea";
import DevLogCla from "../components/index/DevLogCla";
import Media from "../components/index/Media";
import Mechanics from "../components/index/Mechanics";

export default function Home() {
  return (
    <>
      <HeroSection className="bg-6-gradient-2" />
      <DownloadCLA className="bg-7-dark-blue" />
      <GameIdea className="bg-3-dark-blue" />
      <DevLogCla className="bg-2-dark-blue" />
      <Media className="bg-1-dark-blue" />
      <Mechanics className="bg-2-dark-blue" />
    </>
  );
}
