import { FC, ReactNode } from "react";
import styled from "styled-components";

import { PALETTE } from "src/constants";

const Main = styled.main`
    background: ${PALETTE.WHITE};
    border-radius: 12px;
    margin: 16px 20px;
    flex: 1 1 100%;
`;

type Props = {
    children: ReactNode;
};

export const Content: FC<Props> = ({ children }) => {
    return <Main>{children}</Main>;
};
