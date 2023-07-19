import { HeaderContainer, LinksList, Logo, StyledLink} from "./style";

export const Header = () => {

  return (
      <HeaderContainer>
          <Logo />
          <LinksList>
              <StyledLink to={''}>Почему Москва-Сити</StyledLink>
              <StyledLink to={''}>Каталог офисов</StyledLink>
              <StyledLink to={''}>Отзывы</StyledLink>
              <StyledLink to={''}>Контакты</StyledLink>
          </LinksList>
      </HeaderContainer>
  );
};