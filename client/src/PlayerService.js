import axios from "axios";

class PlayerService {
  static async getPlayer(id, firstName, lastName) {
    const res = await axios.get(
      "http://localhost:5000/nba-players/" +
        id +
        "/" +
        firstName +
        "/" +
        lastName
    );
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
export default PlayerService;
