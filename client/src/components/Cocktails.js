import { useContext } from "react";
import { Header, Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { CocktailContext } from "../providers/CocktailProvider";

const Cocktails = () => {
  //grabbing cocktails using use state and use effect
  const { cocktails } = useContext(CocktailContext);

  const renderCocktails = () => {
    if (cocktails) {
      return cocktails.map((c) => (
        <Link to={`/cocktails/${c.id}`}>
          <Card key={c.id}>
            <Image src={c.image} height="250px" />
            <Card.Header>{c.name}</Card.Header>
          </Card>
        </Link>
      ));
    }
  };

  return (
    <>
      <Header>Cocktails</Header>
      <Card.Group itemsPerRow={4}>{renderCocktails()}</Card.Group>
    </>
  );
};
export default Cocktails;
