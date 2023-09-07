import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import { useState } from "react";
import * as fs from "fs";

const Slug = (props) => {
  function createMarkup(c) {
    return { _html: c };
  }
  const [blog, setblog] = useState(props.myBlog);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        {blog && (
          <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>
        )}
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "how-to-learn-react" } },
      { params: { slug: "how-to-learn-nextjs" } },
      { params: { slug: "how-to-learn-javascript" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");
  return {
    props: { myBlog: JSON.parse(myBlog) },
  };
}
export default Slug;
