import { Row, Col, Button } from "react-bootstrap";

const CategoryButtons = () => {
  return (
    <Row className="mb-4">
      <Col className="d-flex justify-content-center gap-3">
        <Button variant="primary">Персонажі</Button>
        <Button variant="success">Планети</Button>
        <Button variant="warning">Зорельоти</Button>
      </Col>
    </Row>
  );
};

export default CategoryButtons;
