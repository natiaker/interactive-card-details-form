import { useState } from "react";
import { Container } from "./components/styles/Container.styled";
import Card from "./components/Card";
import Form from "./components/Form";
import GlobalStyles from "./components/styles/GlobalStyles";
import ThankYou from "./components/ThankYou";

function App() {
  const [isConfirmed, setIsConfirmed] = useState<Boolean>(false);

  return (
    <>
      <GlobalStyles />
      <Container>
        <Card />
        {isConfirmed ? (
          <ThankYou setIsConfirmed={setIsConfirmed} />
        ) : (
          <Form setIsConfirmed={setIsConfirmed} />
        )}
      </Container>
    </>
  );
}

export default App;
