import './App.css';
import styled from 'styled-components';


function App() {
    return (
        <div className="App">
            <Title>Styled-components <span>.attrs</span> method</Title>

            <Form>
                <Field/>
                <Field/>
                <Field/>
            </Form>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    margin-bottom: 32px;
    span {
      color: #e91e63;
    }
`;

const Form = styled.form`
  width: 100%;
  max-width: 500px;
`;

const Field = styled.input`
  padding: 5px 15px;
  margin: 10px 0;
  width: 100%;
  font-size: 1rem;
`;
