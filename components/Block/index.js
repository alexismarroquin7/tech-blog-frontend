import { BlockH1 } from "./BlockH1";
import { BlockH2 } from "./BlockH2";
import { BlockH3 } from "./BlockH3";
import { BlockParagraph } from "./BlockParagraph";

export function Block ({block}) {
  switch (block.type) {
    case "h1":
      return <BlockH1 block={block}/>;
    case "h2":
      return <BlockH2 block={block}/>;
    case "h3":
      return <BlockH3 block={block}/>;
    case "paragraph":
      return <BlockParagraph block={block}/>;
    default:
      throw Error(`unknown block type: ${block.type}`);
  }
}