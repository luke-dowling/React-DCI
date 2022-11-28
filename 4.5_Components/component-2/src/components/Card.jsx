// const Card = (props) => {
//   console.log(props);

//   return <h1>{props.name}</h1>;
// };

const Card = ({ info, disappear }) => {
  const { name, text } = info;

  return (
    <div onClick={disappear}>
      <h1>{name}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Card;
