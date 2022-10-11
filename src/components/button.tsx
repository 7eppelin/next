import { FC, forwardRef } from "react";
import styled from "styled-components";

import { PALETTE, TYPOGRAPHY } from "src/constants";

const ButtonStyled = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 163px;
    height: 36px;
    border-radius: 8px;
    transition: all 0.15s ease;

    background: ${PALETTE.BLUE_PRIMARY};
    color: ${PALETTE.WHITE};

    ${TYPOGRAPHY.SMALL}

    &:disabled {
        cursor: default;
        opacity: 0.5;
    }
`;

type Props = {
    text: string;
    onClick: () => void;
};

export const Button: FC<Props> = forwardRef<HTMLButtonElement, Props>(
    ({ text, onClick }, ref) => {
        return (
            <ButtonStyled onClick={onClick} ref={ref}>
                {text}
            </ButtonStyled>
        );
    },
);
