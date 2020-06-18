<template>
  <div>
    <div>count:{{ count }}</div>
    <div>count2:{{ count2 }}</div>
    <div>count1:{{ count1 }}</div>
    <div>count3:{{ count3("count3") }}</div>
    <div>count4:{{ count4 }}</div>
    <div>length:{{ length }}</div>
    <el-button @click="addCount">add-count</el-button>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions, createNamespacedHelpers } from "vuex";

const { mapState: testState } = createNamespacedHelpers("test");

export default {
  name: "vuex",
  computed: {
    ...mapState("test", {
      count1: "count"
    }),
    ...testState({
      count4: "count"
    }),
    ...testState(["count"]),
    ...mapGetters({
      count3: "test/getCountLength"
    }),
    count2() {
      return this.$store.state.test.count;
    },
    length() {
      return this.$store.getters["test/getCountLength"]("length");
    }
  },
  methods: {
    ...mapMutations({
      increment: "test/increment"
    }),
    ...mapActions({
      ayncIncrement: "test/ayncIncrement"
    }),
    addCount() {
      // this.$store.commit("test/increment", this.count + 1);
      // this.$store.dispatch("test/ayncIncrement", this.count + 1);
      // this.increment(this.count + 1);
      this.ayncIncrement(this.count + 1);
    }
  },
  created() {}
};
</script>
