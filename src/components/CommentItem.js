export default function CommentItem({ texto, autor }) {
  return (
    <li>
      {texto} - {autor}
    </li>
  );
}
