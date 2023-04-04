import Spline from "@splinetool/react-spline";
import styled from "@emotion/styled";
import { Routes, Route, Link } from "react-router-dom";
import Bimo from "./bimo";
import Iphone from "./iphone";

const ContainerStyled = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
`;

const Navigation = styled.div`
    position: absolute;

    bottom: 5%;
    left: 50%;

    transform: translateX(-50%);

    display: flex;
    width: 90%;
    justify-content: center;
    align-items: center;
    column-gap: 2rem;

    a {
        text-decoration: none;
        color: #fff;

        font-size: 4vw;
        font-weight: bold;
    }
`;

const Loading = styled.span``;

function App() {
    return (
        <ContainerStyled>
            <Routes>
                <Route path="/" element={<Bimo />} />
                <Route path="/bimo" element={<Bimo />} />
                <Route path="/iphone" element={<Iphone />} />
            </Routes>
            <Navigation>
                <Link to="/">Bimo</Link>
                <Link to="/iphone">iPhone 14 Pro</Link>
            </Navigation>
        </ContainerStyled>
    );
}

export default App;
