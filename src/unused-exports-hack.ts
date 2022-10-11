// Next requires us to export pages, but we don't import them anywhere
// and therefore the unused-exports script fails.
// This file imports all the pages in order to surpass the unused-exports check

// If you have some other idea how to fix this, feel free to open a PR

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Home from "./pages";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import App from "./pages/_app";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NewPost from "./pages/new-post";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Posts from "./pages/posts";
