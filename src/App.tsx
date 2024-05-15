import {GridThemeProvider} from 'bear-react-grid';
import gridConfig from "./config/grid";
import Header from './views/Snippets/Header/Header';

function App() {
    return (
        <GridThemeProvider gridTheme={gridConfig}>
            <Header/>
        </GridThemeProvider>
    );
}

export default App
