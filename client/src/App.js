import React from "react";
import {Button} from "flowbite-react";

function App() {
    return (
        <div className="App">
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <div>
                <Button gradientMonochrome="success">
                    Success
                </Button>
            </div>
        </div>
    );
}

export default App;
