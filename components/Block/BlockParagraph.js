import { v4 as uuid } from "uuid";

export function BlockParagraph ({
  block
}) {
  return <p>
    {block.content.map(content_item => {
      switch (content_item.marks[0].type) {
        case "plain":
          return content_item.value;
        case "bold":
          return <span
            key={uuid()}
            style={{fontWeight: "bold"}}
          >{content_item.value}</span>;  
        case "italic":
          return <span
            key={uuid()}
            style={{fontStyle: "italic"}}
          >{content_item.value}</span>;
        case "line-through":
          return <span
            key={uuid()}
            style={{textDecoration: "line-through"}}
          >{content_item.value}</span>;  
        case "underline":
          return <span
            key={uuid()}
            style={{textDecoration: "underline"}}
          >{content_item.value}</span>;
        default:
          throw Error(`unknown block type: ${content_item.marks[0].type}`);
      }
    })}
  </p>
}