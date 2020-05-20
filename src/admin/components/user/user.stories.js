import user from "./user.vue";
import "../../default.pcss";
import { bgGreyDecorator } from "../../../../.storybook/decorators";


export default {
  title: "User",
  decorators: [bgGreyDecorator]
}

export const defaultView = () => ({
  components: { user },
  template: `
    <user
      userpic="https://picsum.photos/300/300"
      username="Богдан Сутужко"
    /> 
  `
});