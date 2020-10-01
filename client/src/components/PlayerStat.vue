<template>
  <div class="playerStat">
    <div class="container p-26">
      <div class="grid-row">
        <div class="grid-item-wrapper p-15">
          <div class="card-content">
            <div class="first-part">
              <img class="mb-10" src="@/assets/player.png" />
              <h3>{{ firstName }}</h3>
              <h3>{{ lastName }}</h3>
            </div>
            <div class="vl" />
            <div class="second-part">
              <table>
                <tr>
                  <th></th>
                  <th v-for="(post, i) in posts" :key="i" scope="col">
                    {{ post.gameDateUTC | moment("DD.MM.YYYY") }}
                  </th>
                </tr>
                <tr>
                  <th class="left-align" scope="row">Poena</th>
                  <td v-for="(post, i) in posts" :key="i" scope="col">
                    {{ post.stats.points }}
                  </td>
                </tr>
                <tr>
                  <th class="left-align" scope="row">Asist</th>
                  <td v-for="(post, i) in posts" :key="i" scope="col">
                    {{ post.stats.assists }}
                  </td>
                </tr>
                <tr>
                  <th class="left-align" scope="row">Uk skok</th>
                  <td v-for="(post, i) in posts" :key="i" scope="col">
                    {{ post.stats.totReb }}
                  </td>
                </tr>
                <tr>
                  <th class="left-align" scope="row">Def skok</th>
                  <td v-for="(post, i) in posts" :key="i" scope="col">
                    {{ post.stats.defReb }}
                  </td>
                </tr>
                <tr>
                  <th class="left-align" scope="row">Ofa skok</th>
                  <td v-for="(post, i) in posts" :key="i" scope="col">
                    {{ post.stats.offReb }}
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlayerService from "../PlayerService";
export default {
  props: ["id", "firstName", "lastName"],
  name: "NbaPlayers",
  data() {
    return {
      posts: [],
      text: ""
    };
  },
  async created() {
    try {
      this.posts = await PlayerService.getPlayer(this.id);
    } catch (err) {
      console.log(err.message);
    }
  }
};
</script>
<style lang="scss">
@import "@/scss/main.scss";
</style>
