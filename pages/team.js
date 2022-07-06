import Edu from "../components/team/Edu";
import Audio from "../components/team/subject/Audio";
import GameDesign from "../components/team/subject/GameDesign";
import GameProgramming from "../components/team/subject/GameProgramming";
import WebDesign from "../components/team/subject/WebDesign";

export default function Team() {
  return (
    <>
      <Edu className="bg-5-dark-blue" />
      <Audio className="bg-2-gradient-2 py-6" />
      <GameDesign className="bg-5-dark-blue py-6" />
      <GameProgramming className="bg-1-gradient-1 py-6" />
      <WebDesign className="bg-6-dark-blue py-6" />
    </>
  );
}
