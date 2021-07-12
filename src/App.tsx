import { FC } from "react";
import styled from "styled-components";

const App: FC = () => {
    return (
        <Wrapper>
            <h1>Clean Up</h1>
        </Wrapper>
    );
};

export default App;

const Wrapper = styled.div`
    margin: auto;
    text-align: center;
`;
