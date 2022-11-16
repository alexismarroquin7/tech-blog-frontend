import { BlockH1 } from "./BlockH1";
import { BlockParagraph } from "./BlockParagraph";

export function Block ({block}) {
  switch (block.type) {
    case "h1":
      return <BlockH1 block={block}/>;
    case "paragraph":
      return <BlockParagraph block={block}/>;
    default:
      throw Error(`unknown block type: ${block.type}`);
  }
}