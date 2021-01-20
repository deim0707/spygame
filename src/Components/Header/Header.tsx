import {FC} from "react";
import {Wrapper, ButtonStepBack,TextContent} from "./header.style";

interface Props {
    children: JSX.Element[] | JSX.Element | string;
    isHaveStepBack?: boolean;
}

const Header: FC<Props> = ({children, isHaveStepBack=false}) => {
    return (
        <Wrapper>
            {isHaveStepBack && <ButtonStepBack>&#8592;</ButtonStepBack>}
            <TextContent isHaveStepBack={isHaveStepBack}>{children}</TextContent>
        </Wrapper>
    )
}

export default Header;
