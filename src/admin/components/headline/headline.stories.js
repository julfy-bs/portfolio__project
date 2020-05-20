import headline from "./headline.vue";
import "../../default.pcss";

export default {
  title: "headline"
}

export const defaultView = () => ({
  components: { headline },
  template: `
    <headline />
  `
});

export const withContent = () => ({
  components: { headline },
  template: `
    <headline>
      <h2>Содержимое</h2>
    </headline>
  `
});

withContent.story = {
  name: "С содержимым"
}