import { Link } from "react-router-dom";
import styled from "styled-components";
import { BaseBox } from "../shared";
import { PropTypes } from "prop-types";

const SBottomBox = styled(BaseBox)`
  padding: 25px 0px;
  text-align: center;
  a {
    font-weight: 600;
    color: ${(props) => props.theme.accent};
  }
`;

function BottomBox({ cta, link, linkText }) {
  return (
    <SBottomBox>
      <span>
        {cta} <Link to={link}>{linkText}</Link>
      </span>
    </SBottomBox>
  );
}

BottomBox.propTypes = {
  cta: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default BottomBox;
