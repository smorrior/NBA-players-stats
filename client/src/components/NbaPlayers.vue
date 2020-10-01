<template>
  <div class="NbaPlayers">
    <div class="container p-16">
      <div class="grid-row">
        <div class="grid-item p-10" v-for="(post, i) in posts" :key="i">
          <div class="grid-item-wrapper">
            <div
              class="grid-item-container"
              @click="
                singlePlayer(post.personId, post.firstName, post.lastName)
              "
            >
              <div class="grid-item-content">
                <div class="item-title">
                  {{ post.firstName }} {{ post.lastName }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AllPlayersService from "../PlayersService";
export default {
  name: "NbaPlayers",
  data() {
    return {
      posts: [],
      text: ""
    };
  },
  async created() {
    try {
      this.posts = await AllPlayersService.getPlayers();
    } catch (err) {
      console.log(err.message);
    }
  },
  methods: {
    singlePlayer(id, firstName, lastName) {
      this.$router.push({
        name: "PlayerStat",
        params: {
          id: id,
          firstName: firstName,
          lastName: lastName
        }
      });
    }
  }
};
</script>
<style lang="scss">
@import "@/scss/main.scss";
</style>
