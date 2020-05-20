import title from "./title.vue";
import "../../default.pcss";

export default {
  title: "title"
}

export const defaultView = () => ({
  components: { title },
  template: `
    <title
      titlename="Блок «Обо мне»"
    /> 
  `
});

export const withButton = () => ({
  components: { title },
  template: `
    <title>
      <a>Добавить группу</a>
    </title>
  `
});

withButton.story = {
  name: "С кнопкой добавления скилов"
}