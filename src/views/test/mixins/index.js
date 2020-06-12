export default {
  data() {
    return {
      num: 23
    };
  },
  computed: {
    cNum() {
      return this.num;
    }
  },
  methods: {
    getNum() {
      return this.num;
    }
  }
};
