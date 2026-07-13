import React from "react";
import { useState } from "react";

export default function Accordion() {
  // parent will listen for any time a user clicks a div with
  // the className "accordian-title"
  // change aria-hidden to opposite
  function changeHidden(e) {
    const title = e.target.closest(".accordian-title");
    if (!title) return;

    const hidden = title.getAttribute("aria-hidden") === "true";
    title.setAttribute("aria-hidden", !hidden);
  }
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="accordian-container" onClick={changeHidden}>
      <div className="accordian">
        <div className="accordian-title" aria-hidden={false}>
          HTML <span aria-hidden={false} className="accordion-icon" />
        </div>
        <div>
          The HyperText Markup Language or HTML is the standard markup language
          for documents designed to be displayed in a web browser.
        </div>
      </div>
      <div className="accordian">
        <div className="accordian-title" aria-hidden={false}>
          CSS <span aria-hidden={false} className="accordion-icon" />
        </div>
        <div>
          Cascading Style Sheets is a style sheet language used for describing
          the presentation of a document written in a markup language such as
          HTML or XML.
        </div>
      </div>
      <div className="accordian">
        <div className="accordian-title" aria-hidden={false}>
          JavaScript <span aria-hidden={false} className="accordion-icon" />
        </div>
        <div>
          JavaScript, often abbreviated as JS, is a programming language that is
          one of the core technologies of the World Wide Web, alongside HTML and
          CSS.
        </div>
      </div>
    </div>
  );
}
