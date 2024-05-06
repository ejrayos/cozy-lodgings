import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

// setting up a default condition
Wrapper.defaultProps = {
  type: "vertical",
};

export default Wrapper;
