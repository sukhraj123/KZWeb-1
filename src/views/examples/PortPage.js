
import IndexNavbar from "components/Navbars/IndexNavbar";
import Port from "views/IndexSections/Port.js";
import React from "react";
// react plugin used to create charts


export default function WorkPage() {
  React.useEffect(() => {
    document.body.classList.toggle("port-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("port-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <Port />
      
    </>
  );
}
