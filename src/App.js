import CommentItem from "./components/CommentItem";

const comentarios = [
  {
    texto: "Estou adorando aprender React",
    autor: "Autor 1"
  },
  {
    texto: "Comentário 2",
    autor: "Autor 2"
  },
  {
    texto: "Comentário 3",
    autor: "Autor 3"
  },
  {
    texto: "Comentário 4",
    autor: "Autor 4"
  },
  {
    texto: "Comentário 5",
    autor: "Autor 5"
  },
  {
    texto: "Comentário 6",
    autor: "Autor 6"
  }
];

export default function App() {
  return (
    <section>
      <h1>{comentarios.length} comentários</h1>
      <textarea />

      <div>
        <ul>
          {comentarios.map((comentario, index) => (
            <CommentItem
              key={index}
              texto={comentario.texto}
              autor={comentario.autor}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
