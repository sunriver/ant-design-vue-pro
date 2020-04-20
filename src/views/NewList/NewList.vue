<template>
  <div>
    <ul>
      <template v-for="item in listData">
        <li :key="item">{{ item }}</li>
      </template>
    </ul>
    <button @click="triggerButton">Button</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {},
  data() {
    return {
      status: false
    };
  },
  computed: mapState({
    listData: state => state.newlist.listData
  }),

  methods: {
    triggerButton() {
      console.log("click button!");
      this.$store.dispatch("newlist/getListData");
    }
  }
};
</script>

<style lang="less" scoped></style>
