import { v4 as uuid } from "uuid";

const posts = [
  {
    post_id: uuid(),
    title: "Galaxy S22 Ultra 8 Months Later",
    custom_url: "Galaxy-S22-Ultra-8-Months-Later",
    date_created: "2022-11-15T18:17:33",
    date_updated: "2022-11-15T00:07:36",
    tags: [
      {
        tag_id: uuid(),
        text: "samsung"
      },
      {
        tag_id: uuid(),
        text: "galaxy"
      },
      {
        tag_id: uuid(),
        text: "s22ultra"
      },
    ],
    thumbnail_image: {
      image_id: uuid(),
      image_src: "",
      image_alt: "",
      image_title: ""
    },
    blocks: [
      {
        block_id: uuid(),
        type: 'h1',
        content: [
          {
            value: 'Hello',
            marks: [{ type: "plain" }]
          },
          {
            value: 'Hello',
            marks: [{ type: "bold" }]
          },
          {
            value: 'Hello',
            marks: [{ type: "italic" }]
          },
          {
            value: 'Hello',
            marks: [{ type: "line-through" }]
          },
          {
            value: 'Hello',
            marks: [{ type: "underline" }]
          },
        ]
      },
      {
        block_id: uuid(),
        type: 'paragraph',
        content: [
          {
            value: 'Hello',
            marks: [{ type: "plain" }]
          },
          {
            value: 'Hello',
            marks: [{ type: "bold" }]
          },
          {
            value: 'Hello',
            marks: [{ type: "italic" }]
          },
          {
            value: 'Hello',
            marks: [{ type: "line-through" }]
          },
          {
            value: 'Hello',
            marks: [{ type: "underline" }]
          },
        ]
      }
    ],
    author: {
      author_id: uuid(),
      name: 'John Smith',
      custom_url: 'john-smith'
    }
  }
]

export const data = {
  posts
}