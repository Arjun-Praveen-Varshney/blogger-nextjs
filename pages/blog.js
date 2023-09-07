import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as fs from "fs";

const Blog = (props) => {
  const [blogs, setblogs] = useState(props.allBlogs);

  return (
    <main className={styles.main}>
      <div className="blogs">
        {blogs.map((blogItem) => {
          return (
            <Link key={blogItem.slug} href={`/blogpost/${blogItem.slug}`}>
              <div className={styles.blogItem}>
                <h3>{blogItem.title}</h3>
                <p>{blogItem.metadesc.substr(0, 10)}...</p>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }
  return {
    props: { allBlogs },
  };
}

export default Blog;
