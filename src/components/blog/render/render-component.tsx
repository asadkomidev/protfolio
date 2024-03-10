import { CodeBlock } from "./render-code";
import ImageBlock from "./render-image";


export const components = {
    types: {
      code: CodeBlock,
      image: ImageBlock,
    },
    block: {
      code: CodeBlock,
    },
  };