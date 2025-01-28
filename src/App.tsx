import { useRef } from "react";
import Input from "./components/Input";
import Form, {type FormHandle} from "./components/Form";
import Button from "./components/Button";

function App() {
  const input = useRef<HTMLInputElement>(null);
  const customForm = useRef<FormHandle>(null);
  function handleSave(data: unknown){
    const extractedData = data as {name: string, age: string}; // as convierte la variable al tipo que realmente es
    // si es un numero va a venir como string siempre
    console.log(extractedData);
    customForm.current?.clear();
  }
  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input label="name" id="name" type="text"></Input>
        <Input label="age" id="age" type="number"></Input>
        <p>
          <Button>Save</Button>
        </p>
      </Form>
      <Input label="Test" id="test" ref={input}></Input>
    </main>
  );
}

export default App;
