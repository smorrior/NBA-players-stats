import PlayerStat from "@/components/PlayerStat";
import NbaPlayers from "@/components/NbaPlayers";
const routes = [
  {
    path: "/",
    name: "NbaPlayers",
    component: NbaPlayers
  },
  {
    path: "/player/:id/:firstName/:lastName",
    name: "PlayerStat",
    props: true,
    component: PlayerStat
  }
];

export default routes;
