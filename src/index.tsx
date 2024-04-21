import {createRoot} from "react-dom/client";


function App() {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
}


const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App/>);
