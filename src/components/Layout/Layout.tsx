import React from "react";
import styled from "@emotion/styled";
import { COLORS, QUERIES } from "utils";
import { ReactComponent as UnstyledUmaLogo } from "assets/Across-Powered-UMA.svg";
import { ReactComponent as DiscordLogo } from "assets/disc-logo.svg";
import { ReactComponent as TwitterLogo } from "assets/icon-twitter.svg";

const NAV_LINKS = [
  {
    name: "FAQ",
    url: "https://docs.across.to/bridge/faq",
  },
  {
    name: "Docs",
    url: "https://docs.across.to/bridge/",
  },
];
const DISCORD_LINK = {
  name: "Discord",
  url: "https://discord.gg/across",
  logo: DiscordLogo,
};
const TWITTER_LINK = {
  name: "Twitter",
  url: "https://twitter.com/AcrossProtocol",
};

const Layout: React.FC = ({ children }) => (
  <Wrapper>
    <LinkFooter>
      {NAV_LINKS.map((link) => (
        <Link
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.name}
        </Link>
      ))}
      <Link href={DISCORD_LINK.url} target="_blank" rel="noopener noreferrer">
        <DiscordLogo />
      </Link>
      <Link href={TWITTER_LINK.url} target="_blank" rel="noopener noreferrer">
        <TwitterLogo />
      </Link>
    </LinkFooter>
    <Main>{children}</Main>
    <LogoFooter>
      <AccentLink
        href="https://umaproject.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <PoweredByUMA />
      </AccentLink>
    </LogoFooter>
  </Wrapper>
);

export default Layout;

const BaseFooter = styled.footer`
  position: sticky;
  bottom: 0;
  padding: 0 15px 15px;
  align-self: self-end;
  justify-self: center;
`;

const LinkFooter = styled(BaseFooter)`
  display: none;
  padding-bottom: 25px;
  & svg {
    width: 25px;
    height: 25px;
    & path {
      fill: currentColor;
    }
  }
  @media ${QUERIES.tabletAndUp} {
    display: flex;
  }
`;

const LogoFooter = styled(BaseFooter)`
  position: absolute;
  right: 10px;
  @media ${QUERIES.tabletAndUp} {
    position: sticky;
    right: revert;
  }
`;

const Link = styled.a`
  text-decoration: none;
  transition: color 100ms linear;
  color: hsla(${COLORS.white} / 0.5);

  &:not(:last-of-type) {
    margin-right: 45px;
  }

  &:hover {
    color: var(--color-white);
  }
`;

const AccentLink = styled(Link)`
  &:hover {
    color: var(--color-uma-red);
  }
`;

const PoweredByUMA = styled(UnstyledUmaLogo)`
  fill: currentColor;
  transition: fill linear 100ms;
  & path {
    fill: currentColor;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: grid;
  padding: 0 10px;
  grid-template-columns: 1fr min(var(--central-content), 100%) 1fr;
  height: 100%;
  @media ${QUERIES.tabletAndUp} {
    padding: 0 30px;
  }
`;

const Main = styled.main`
  height: 100%;
  grid-column: 2;
  box-shadow: 0 0 120px hsla(${COLORS.primary[500]} / 0.25);
  clip-path: inset(0px -160px 0px -160px);
`;
