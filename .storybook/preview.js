
import { setCompodocJson } from "@storybook/addon-docs/angular";
setCompodocJson({});
import "../src/styles.scss";


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true }
}
