import {FC} from "react";
import styled from "styled-components";

interface Props {
    children: JSX.Element[] | JSX.Element | string
}

const HeaderC = styled.div`
  width: 100%;
  text-align: start;
`;

const Header: FC<Props> = ({children}) => {
    return (
        <HeaderC>{children}</HeaderC>
    )
}

export default Header;
