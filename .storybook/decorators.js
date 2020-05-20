export const bgGreyDecorator = () => {
  return {
    data: () => ({
      styles: {
        padding: "20px",
        background: "#3e3e59"
      }
    }),
    template: `
      <div :style="styles"><story/></div>
    `
  }
}