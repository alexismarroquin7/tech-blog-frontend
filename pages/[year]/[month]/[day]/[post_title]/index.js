import { useState } from "react"
import { data } from "../../../../../data"
import style from "./BlogPostPage.module.css";
import { Block } from "../../../../../components/Block";

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
      {post.blocks.map(block => <Block key={block.block_id} block={block}/>)}
    </div>

  </div>
}