<template>
  <div class="post-container">
    <div v-for="post in getPostListWithPagination" :key="post.id">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ getUserName(post) }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ post.title }}</h6>
          <p class="card-text">
            {{ post.body }}
          </p>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapGetters, mapActions } from "vuex";
export default {
  name: "PostsList",
  data() {
    return {
      skip: 0,
    };
  },
  computed: {
    ...mapGetters(["getPostList", "getUserList"]),
    getPostListWithPagination() {
      return this.getPostList.slice(this.skip, this.skip + 10);
    },
  },
  mounted() {
    this.fetchPostList();
    this.fetchUserList();
  },
  methods: {
    ...mapActions(["fetchPostList", "fetchUserList"]),
    getUserName(post) {
      return this.getUserList.filter((user) => user.id === post.userId)[0]
        .username;
    },
  },
};
</script>
<style scoped>
.card {
  display: inline-block;
  margin-bottom: 20px;
  background-color: white;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  width: 40%;
}
.card-body {
  padding: 10px;
}
.card-title {
  font-size: 1.2rem;
  font-weight: 600;
}
.card-subtitle {
  font-size: 1rem;
  font-weight: 400;
}
.card-text {
  font-size: 0.9rem;
  font-weight: 400;
}
</style>
