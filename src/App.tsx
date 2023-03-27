import { Container } from "./components/styles/Container.styled";
import Card from "./components/Card";
import Form from "./components/Form";
import GlobalStyles from "./components/styles/GlobalStyles";
import ThankYou from "./components/ThankYou";
import { AppProvider } from "./context";
import { useState } from "react";

function App() {
  const [isConfirmed, setIsConfirmed] = useState<Boolean>(false);

  return (
    <>
      <AppProvider setIsConfirmed={setIsConfirmed}>
        <GlobalStyles />
        <Container>
          <Card />
          {isConfirmed ? <ThankYou /> : <Form />}
        </Container>
      </AppProvider>
    </>
  );
}

export default App;
