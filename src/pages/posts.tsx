import Link from "next/link";
import styled from "styled-components";

import { Button } from "src/components";

const Wrapper = styled.div``;

const noop = () => {
    // noop
};

const Posts = () => {
    return (
        <Wrapper>
            <Link href="/new-post">
                <Button text="Create Post" onClick={noop} />
            </Link>
        </Wrapper>
    );
};

export default Posts;
