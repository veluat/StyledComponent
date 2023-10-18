import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";


function App() {
    return (
        <Wrapper className="App">
            <Header/>
            <Main/>
        </Wrapper>
    );
}

export default App;

const Wrapper = styled.div`
background-color: #090F1D;
  color: #FFFFFD;
  font-size: 16px;
`
