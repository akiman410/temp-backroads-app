import React from "react";
import { pageLinks } from "../data";
import PageLink from "./PageLink";

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        console.log(pageLinks);
        return (
          <PageLink key={link.id} link={link} itemClass={itemClass}></PageLink>
        );
      })}
    </ul>
  );
};

export default PageLinks;
