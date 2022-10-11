import styled from "styled-components";

import { SIDEBAR_WIDTH } from "src/constants";

import { LogoIcon } from "./icons";

const LogoWrapper = styled.div`
    width: ${SIDEBAR_WIDTH};
    padding-left: 24px;
`;

export const Logo = () => {
    return (
        <LogoWrapper>
            <LogoIcon />
        </LogoWrapper>
    );
};
