import { useState } from "react"
import { data } from "../../../../../data"
import style from "./BlogPostPage.module.css";

function BlockParagraph ({
  content = []
}) {
  
  return <p>
    {content.map(content_item => {
      switch (content_item.marks[0].type) {
        case "plain":
          return content_item.value;
        case "bold":
          return <span style={{fontWeight: "bold"}}>{content_item.value}</span>;  
        case "italic":
          return <span style={{fontStyle: "italic"}}>{content_item.value}</span>;
        case "line-through":
          return <span style={{textDecoration: "line-through"}}>{content_item.value}</span>;  
        case "underline":
          return <span style={{textDecoration: "underline"}}>{content_item.value}</span>;
        default:
          throw Error(`unknown block type: ${content_item.marks[0].type}`);
      }
    })}
  </p>
}

export default function BlogPostPage () {
  const [post, setPost] = useState(data.posts[0]);

  return <div
    className={style.blog_post}
  >
    <h1
      className={style.blog_post_title}
    >
      {post.title}
    </h1>
    
    <div
      className={style.tag_list}
    >
      {post.tags.map(tag => {
        return <a
          key={tag.tag_id}
          className={style.tag_item}
          href="#"
        >#{tag.text}</a>
      })}
    </div>

    <div
      className={style.blog_post_content}
    >
      {post.blocks.map(block => {
        switch (block.type) {
          case "h1":
            return <div></div>;
          case "paragraph":
            return BlockParagraph(block);
          default:
            throw Error(`unknown block type: ${block.type}`);
        }
      })}
    </div>

  </div>
}