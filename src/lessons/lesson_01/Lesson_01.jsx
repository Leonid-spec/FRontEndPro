import reactImg from "../../assets/react.svg";


function Lesson_01() {
  return (
    <div>
      <img src={reactImg} width={150} alt="Harry" />
      <h2>Hello Harry!</h2>
      <p>
        После перезапуска VSCode терминал по умолчанию будет использовать Git
        Bash.
      </p>
    </div>
  );
}
export default Lesson_01;
