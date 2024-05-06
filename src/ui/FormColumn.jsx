import styled from "styled-components";
import PropTypes from "prop-types";

FormColumn.propTypes = {
  label: PropTypes.any,
  error: PropTypes.any,
  children: PropTypes.any,
};

const StyledFormColumn = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormColumn({ label, error, children }) {
  return (
    <StyledFormColumn>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormColumn>
  );
}

export default FormColumn;
