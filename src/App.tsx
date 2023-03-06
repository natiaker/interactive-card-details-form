import { useState } from "react";
import { Container } from "./components/styles/Container.styled";
import Card from "./components/Card";
import Form from "./components/Form";
import GlobalStyles from "./components/styles/GlobalStyles";
import ThankYou from "./components/ThankYou";

function App() {
  const [isConfirmed, setIsConfirmed] = useState<Boolean>(true);

  return (
    <>
      <Container>
        <GlobalStyles />
        <Card />
        {isConfirmed ? <ThankYou /> : <Form />}
      </Container>
    </>
  );
}

export default App;
