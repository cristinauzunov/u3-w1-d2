import { Component } from "react";
import { Card, Button } from "react-bootstrap";  // ← aggiungi Button

class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  toggleSelected = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    const { book } = this.props;
    const { selected } = this.state;

    return (
      <Card
        className="book-card h-100"
        onClick={this.toggleSelected}
        style={{
          cursor: "pointer",
          border: selected ? "3px solid red" : "3px solid transparent",
          transform: selected ? "scale(1.03)" : "scale(1)",
          transition: "all 0.2s ease",
        }}
      >
        <Card.Img
          variant="top"
          src={book.img}
          alt={book.title}
          className="book-cover"
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="book-title">{book.title}</Card.Title>
          <Card.Text>Category: {book.category}</Card.Text>
          <Card.Text>Price: {book.price}€</Card.Text>
          <Button className="mt-auto" variant="success"> {}
            Buy
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;