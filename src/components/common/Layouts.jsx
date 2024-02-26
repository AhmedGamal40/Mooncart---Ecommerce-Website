import PropTypes from "prop-types";
import Header from "./Header";

const Layouts = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "180vh" }}>{children}</main>
      <h2>Footer</h2>
    </>
  );
};

export default Layouts;

Layouts.propTypes = {
  children: PropTypes.isRequired,
};
