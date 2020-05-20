import skills from "./skills.vue";
import "../../default.pcss";

export default {
  title: "skills"
}

export const defaultView = () => ({
  components: { skills },
  template: `
    <skills/>
  `
});

export const withContent = () => ({
  components: { skills },
  template: `
    <skills>
      <h2>Содержимое</h2>
    </skills>
  `
});

withContent.story = {
  name: "С содержимым"
}