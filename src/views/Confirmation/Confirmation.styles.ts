import styled from "@emotion/styled";
import { PrimaryButton, SectionTitle } from "components";

export const Wrapper = styled.div`
  padding-top: 50px;
`;

export const Heading = styled(SectionTitle)`
  font-weight: 700;
  font-size: ${30 / 16}rem;
  margin-bottom: 36px;
`;

export const SuccessIcon = styled.div`
  background-color: var(--color-primary);
  color: var(--color-gray);
  border-radius: 9999px;
  width: 70px;
  height: 70px;
  display: grid;
  place-items: center;
`;

export const Link = styled.a`
  color: var(--color-primary);
  cursor: pointer;
  display: block;
  width: fit-content;
  margin: auto;
  &:hover {
    text-decoration: underline;
  }
`;

export const Info = styled.article`
  border-bottom: 1px solid var(--primary-dark);
  margin: 0 calc(-1 * var(--horizontalPadding));
  padding: 15px var(--horizontalPadding);
`;

export const Button = styled(PrimaryButton)`
  font-size: ${22 / 16}rem;
  font-weight: bold;
  width: 100%;
  margin-top: 24px;
`;
