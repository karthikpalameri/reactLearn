// import Message from './Message'
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
function App() {
  // let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <>
      {/* <ul className="list-group">
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={(item: string): void => {
            console.log(item);
          }}
        />
      </ul> */}
      <div>
        {alertVisible && (
          <Alert
            onClose={(): void => {
              setAlertVisibility(false);
            }}
          >
            Alert <span>Message!</span>
          </Alert>
        )}
      </div>
      <div>
        <Button
          color="primary"
          onClick={(): void => {
            setAlertVisibility(true);
            console.log("Button clicked!");
          }}
        >
          My Button Name!
        </Button>
      </div>
    </>
  );
}

export default App;
