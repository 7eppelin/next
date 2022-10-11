import { FC, ReactNode } from "react";
import styled from "styled-components";

import { HEADER_HEIGHT, PALETTE } from "src/constants";

import { Content } from "./content";
import { Header } from "./header";
import { Sidebar } from "./sidebar";

const AppWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${PALETTE.GREY_3};
`;

const ContentWrapper = styled.div`
    height: calc(100% - ${HEADER_HEIGHT});
    display: flex;
`;

type Props = {
    children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
    return (
        <AppWrapper>
            <Header />
            <ContentWrapper>
                <Sidebar />
                <Content>{children}</Content>
            </ContentWrapper>
        </AppWrapper>
    );
};
