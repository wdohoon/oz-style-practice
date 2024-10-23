import styled from 'styled-components';
import {contents} from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
    return (
        <Main>
            <Header/>
            <Section>
                {contents.map((el) => (
                    <Content key={el.id} content={el}/>
                ))}
            </Section>
        </Main>
    );
}

export default App;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px 40px;
`;