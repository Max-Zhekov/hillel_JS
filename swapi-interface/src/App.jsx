import { Container } from "react-bootstrap";
import CategoryButtons from "./components/CategoryButtons";
import Header from "./components/Header";
import DataTable from "./components/DataTable";

function App() {
  return (
    <>
      <Container className="py-5">
        <Header />
        <CategoryButtons />
        <DataTable />
      </Container>
    </>
  );
}

export default App;
