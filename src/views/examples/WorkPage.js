
import IndexNavbar from "components/Navbars/IndexNavbar";
import Work from "views/IndexSections/Work.js";
import React from "react";
// react plugin used to create charts


export default function WorkPage() {
  React.useEffect(() => {
    document.body.classList.toggle("work-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("work-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <Work />
      
    </>
  );
}
