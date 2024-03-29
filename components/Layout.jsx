import React from "react";
import Footer from "./Footer";
import { Nav } from "./Nav";
export default function Layout(props) {
  return (
    <>
      <nav>
        <Nav />
      </nav>

      <div>{props.children}</div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
