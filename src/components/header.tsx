import { useRouter } from "next/router";
import styled from "styled-components";

import { HEADER_HEIGHT, PALETTE, TYPOGRAPHY } from "src/constants";

import { Logo } from "./logo";

const HeaderStyled = styled.header`
    height: ${HEADER_HEIGHT};
    display: flex;
    align-items: center;
    gap: 20px;
    border-bottom: 1px solid ${PALETTE.GREY};
    background: ${PALETTE.WHITE};
`;

const Span = styled.span`
    ${TYPOGRAPHY.BODY}
`;

const capitalize = (str: string) => {
    return str[0].toUpperCase() + str.slice(1);
};

const formatPath = (path: string) => {
    return path.slice(1).split("-").map(capitalize).join(" ");
};

export const Header = () => {
    const { pathname } = useRouter();

    return (
        <HeaderStyled>
            <Logo />
            <Span>{formatPath(pathname)}</Span>
        </HeaderStyled>
    );
};
