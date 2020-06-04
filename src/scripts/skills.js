import Vue from "vue";
import $axios from "../admin/helpers/apiSettings"

const skill = {
  template: "#skill",
  props: ["skill"],
  computed: {
    getPercentValue() {
      const circle = this.$refs["circle"];
      const dashArray = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dasharray")
      );
      const percent = (dashArray / 100) * (100 - this.skill.percent);
      return percent;
    }
  },
  methods: {
    drawColoredCircle() {
      this.$refs["circle"].style.strokeDashoffset = this.getPercentValue;
    },
  },
  mounted() {
    this.drawColoredCircle();
  },
};

const skillsRow = {
  template: "#skills-row",
  components: {
    skill,
  },
  props: ["category"],
};

new Vue({
  el: "#skills-component",
  template: "#skills-list",
  components: {
    skillsRow,
  },
  data() {
    return {
      skills: [],
    };
  },
  async created() {
    const { data } = await $axios.get("categories/349");
    this.skills = data;
  }
});
