import React from "react";
import { Card } from "react-bootstrap";

const PictureGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <div>loading...</div>
  ) : (
    <section className="pictureDisp">
      <div className="d-flex justify-content-center">
        <Card border="dark" style={{ width: "50rem" }}>
          <Card.Img variant="top" src={items.url} alt={items.url} />
          <Card.Body>
            <Card.Title>{items.title}</Card.Title>
            <Card.Subtitle className="pb-3 text-muted">
              Credit: {items.copyright}
            </Card.Subtitle>
            <Card.Text>{items.explanation}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
};

export default PictureGrid;
