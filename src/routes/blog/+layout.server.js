import { data } from "./data.js";

export function load() {
  return {
    summaries: data.map((post) => (
      {
        id: post.id,
        title: post.title,
        slug: post.slug
      }
    ))
  };
}