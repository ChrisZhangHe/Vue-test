<template>
  <div>
    <!-- message:{{message}}
    name:{{name}}
    stateWatchVal:{{stateWatchVal}}
    stateWatchVal:{{stateWatchVal}}
    state:{{state}}
    <el-input
      v-bind:disabled="unEdit"
      v-model="message"
    ></el-input> -->
    <template v-if="type == true">
      <div>
        <label for="">名称</label>
        <input placeholder="请输入名称" />
      </div>
    </template>
    <template v-else>
      <div>
        <label for="">密码</label>
        <input placeholder="请输入密码" />
      </div>
    </template>

    <el-button @click="toggle">toggle</el-button>
  </div>
</template>
<script>
// import ipcRenderer from "electron";
const { ipcRenderer } = require("electron");

debugger;
ipcRenderer.sendSync("synchronous-message", "ping");
export default {
  name: "VueApi",
  data() {
    return {
      type: true,
      password: "",
      name: ""
      //   state: "2",
      //   stateWatchVal: "",
      //   name: [1, 2],
      //   unEdit: false
    };
  },
  methods: {
    init() {},
    toggle() {
      this.type = !this.type;
    }
  },
  computed: {
    nameVal() {
      return `${this.name}123`;
    }
    // message: {
    //   get() {
    //     console.log("-----", this.name);
    //     return this.name.join(",");
    //   },
    //   set(val) {
    //     this.name = val.split(",");
    //   }
    // }
  },
  watch: {
    // state() {
    //   console.log("-----", this.state);
    //   this.stateWatchVal = this.state;
    // }
  },
  created() {
    setTimeout(() => {
      // alert(localStorage.getItem("a"));
      window.location.href("http://localhost:8066/#/");
    }, 1000);
    // alert(this.$route.query.callback);
    // this.$route.query.callback(12314);
    console.log(this.nameVal);
    // this.init();
    // setTimeout(() => {
    //   this.state = "created";
    // }, 1000);
  },
  beforeUpdate() {
    // this.state = "beforeUpdate";
  },
  updated() {}
};
</script>
