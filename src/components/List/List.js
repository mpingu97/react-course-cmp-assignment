import ListItem from "./ListItem";
import "../../index.css";

function List(probs) {
  return (
    <div>
      <ul id="concepts">
        <ListItem
          image={probs.concepts[0].image}
          titel={probs.concepts[0].title}
          description={probs.concepts[0].description}
        ></ListItem>
        <ListItem
          image={probs.concepts[1].image}
          titel={probs.concepts[1].title}
          description={probs.concepts[1].description}
        ></ListItem>
        <ListItem
          image={probs.concepts[2].image}
          titel={probs.concepts[2].title}
          description={probs.concepts[2].description}
        ></ListItem>
      </ul>
    </div>
  );
}

export default List;
