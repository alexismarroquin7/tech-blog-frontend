import { v4 as uuid } from "uuid";
import style from "./BlockH3.module.css";

export function BlockH3 ({
  block
}) {
  return <h3>
    {block.content.map(content_item => {
      switch (content_item.marks[0].type) {
        case "plain":
          return content_item.value;
        case "bold":
          return <span 
            key={uuid()}
            className={`${style.block_h3_span} ${style.block_h3_span_bold}`}
          >{content_item.value}</span>;  
        case "italic":
          return <span 
            key={uuid()}
            className={`${style.block_h3_span} ${style.block_h3_span_italic}`}
          >{content_item.value}</span>;
        case "line-through":
          return <span 
            key={uuid()}
            className={`${style.block_h3_span} ${style.block_h3_span_line_through}`}
          >{content_item.value}</span>;  
        case "underline":
          return <span 
            key={uuid()}
            className={`${style.block_h3_span} ${style.block_h3_span_underline}`}
          >{content_item.value}</span>;
        default:
          throw Error(`unknown block type: ${content_item.marks[0].type}`);
      }
    })}
  </h3>
}