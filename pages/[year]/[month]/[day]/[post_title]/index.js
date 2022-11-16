import { useState } from "react"
import { data } from "../../../../../data"
import style from "./BlogPostPage.module.css";
import { Block } from "../../../../../components/Block";

const dateText = (dateString) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  let monthString = dateString.slice(5, 7);
  let resDateString = dateString.slice(8, 10);
  let yearString = dateString.slice(0, 4); 
  let res = `${months[Number(monthString) - 1]}. ${resDateString}, ${yearString}`;
  return res;
}

const timeText = (dateString) => {
  dateString = dateString.slice(11);
  let hours = Number(dateString.slice(0, 2));
  let minutes = Number(dateString.slice(3, 5));
  let am = true;

  if(hours === 0){
    hours = 12;
  } else if(hours === 12) {
    am = false;
  } else if(hours > 12) {
    hours -= 12;
    am = false;
  }
  
  console.log({hours, minutes, am});
  
  let res = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}${am ? 'am' : 'pm'}`;

  return res;
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

    <div>
      <p>By{' '}
        <a
          href={`/authors/${post.author.custom_url}`}
        >{post.author.name}</a>
      </p>
      <p>Updated: {dateText(post.date_updated)} {timeText(post.date_updated)}</p>
    </div>

    <div
      className={style.blog_post_content}
    >
      {post.blocks.map(block => <Block key={block.block_id} block={block}/>)}
    </div>

  </div>
}