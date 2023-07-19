import {Header} from "../../components/Header/Header";
import {Banner, Container} from "./style";
import BannerImg from "../../assets/alexandr-bormotin.png";
import {Main} from "../../components/Main/Main";


export const Home = () => {

  return (
      <Container>
        <Header />
        <Banner src={BannerImg} />
        <Main />
      </Container>
  );
};