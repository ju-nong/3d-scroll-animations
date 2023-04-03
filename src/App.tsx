import Spline from "@splinetool/react-spline";
import styled from "@emotion/styled";

const ContainerStyled = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

const SplineContainerStyled = styled.div`
    width: 100%;
    height: 50%;
`;

function App() {
    return (
        <ContainerStyled>
            <Spline scene="https://prod.spline.design/3FnyI600w7sg5Rcv/scene.splinecode" />

            {/* <Spline scene="https://prod.spline.design/bGxpzedyDj3EgoCi/scene.splinecode" /> */}
        </ContainerStyled>
    );
}

export default App;
