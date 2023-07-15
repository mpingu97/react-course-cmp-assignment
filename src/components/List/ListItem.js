import "./ListItem.css";

function ListItem(probs) {
  return (
    <li className="concept">
      <img src={probs.image} alt={probs.title} />
      <h2>{probs.title}</h2>
      <p>{probs.description}</p>
    </li>
  );
}

export default ListItem;
