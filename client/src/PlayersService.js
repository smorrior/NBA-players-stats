import axios from "axios";

const url = "http://localhost:5000/nba-players";

class AllPlayersService {
  static async getPlayers() {
    const res = await axios.get(url);
    try {
      const data = res.data;
      let dataValue = Object.values(data);
      let dataValuesArray = [];
      dataValue.forEach(function(league) {
        league.forEach(function(player) {
          dataValuesArray.push(player);
        });
      });
      return dataValuesArray;
    } catch (err) {
      return err;
    }
  }
}

export default AllPlayersService;
