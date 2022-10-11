import Link from "next/link";
import styled from "styled-components";

import { PALETTE, SIDEBAR_WIDTH } from "src/constants";

import { PostsIcon } from "./icons";

const Aside = styled.aside`
    width: ${SIDEBAR_WIDTH};
    background: ${PALETTE.WHITE};
    height: 100%;
    padding: 32px 12px;
`;

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
`;

const LinkStyled = styled.a`
    cursor: pointer;
    border-radius: 8px;
    background: ${PALETTE.GREY_2};
    height: 40px;
    padding: 0 18px;
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const Sidebar = () => {
    return (
        <Aside>
            <Nav>
                <Link href="/posts">
                    <LinkStyled>
                        <PostsIcon />
                        {"Posts\r"}
                    </LinkStyled>
                </Link>
            </Nav>
        </Aside>
    );
};
