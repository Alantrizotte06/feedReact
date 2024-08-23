/*Importação de componentes*/
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

// Informações necessárias no componente post
// author : { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// Content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Alantrizotte06.png",
      name: "Alan Trizotte",
      role: "Dev Front-end",
    },
    content: [
      { type: "paragraph", content: "What is Lorem Ipsum?" },
      {
        type: "paragraph",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        type: "paragraph",
        content:
          "Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        type: "paragraph",
        content:
          "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        type: "paragraph",
        content:
          "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      { type: "paragraph", content: "Link para projeto:" },
      {
        type: "link",
        content: "https://github.com/Alantrizotte06/feedReact",
      },
    ],
    publishedAt: new Date("2024-08-22 18:24:30"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Diegotgagliardi.png",
      name: "Diego Gagliardi",
      role: "Dev Back-end",
    },
    content: [
      { type: "paragraph", content: "What is Lorem Ipsum?" },
      {
        type: "paragraph",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      { type: "paragraph", content: "Link para projeto:" },
      {
        type: "link",
        content: "https://github.com/Diegotgagliardi",
      },
    ],
    publishedAt: new Date("2024-08-21 14:36:30"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
