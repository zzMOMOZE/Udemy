import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.6rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-200);
`;

export default function Header() {
  return <StyledHeader>HEADER</StyledHeader>;
}
