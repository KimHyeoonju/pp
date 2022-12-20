import { Link } from "react-router-dom";
import { media } from "../styles/theme";
import styled from "styled-components";
import refrige from "../asset/img/home/refrige.png";
import goToTop from "../asset/img/home/goToTop.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  AOS.init();
  const handleGoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <HomeContainer>
        <GoTopButton onClick={handleGoTop}>
          <img src={goToTop} alt="go to top" />
          <p>Top</p>
        </GoTopButton>
        <MainBackground>
          <MainSection>
            <MainContent>
              <div className="mainContentInner">
                <h2 className="mainTitle main">오늘도 냉장고에 있는 재료로 뭐 해먹지?</h2>
                <h2 className="mobile">
                  오늘도 냉장고에 있는
                  <br />
                  재료로 뭐 해먹지?
                </h2>
                <p className="mainText main">
                  매일 똑같은 재료로 똑같은 음식 지겹지 않으신가요?
                  <br />
                  지금 냉장고에 있는 재료로 새로운 레시피를 추천해드려요!
                </p>
                <Link to="/recommend" className="mainLink">
                  <p className="main">지금 바로 레시피 추천</p>
                  <p className="mobile">레시피 추천</p>
                </Link>
              </div>
            </MainContent>
            <MainImage>
              <img src={refrige} alt="refrigerator" />
            </MainImage>
          </MainSection>
        </MainBackground>
        <Bottomstyle>
        </Bottomstyle>
      </HomeContainer>
    </>
  );
};

// HOME
const HomeContainer = styled.section`
  position: relative;
  overflow: hidden;
  h2 {
    ${({ theme }) => theme.font.bold};
    ${({ theme }) => theme.font.xxlarge};
    ${media.tablet} {
      ${({ theme }) => theme.font.xlarge};
    }
    ${media.tablet} {
      ${({ theme }) => theme.font.large};
    }
  }
  p {
    ${({ theme }) => theme.font.medium};
    ${media.tablet} {
      ${({ theme }) => theme.font.normal};
    }
  }
  .mobile {
    display: none;
  }
  ${media.mobile} {
    .main {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
  line-height: 1.5;
  box-sizing: border-box;
`;

// MAIN
const MainBackground = styled.div`
  background-color: #f9f9f9;
`;
const MainSection = styled.section`
  width: 1200px;
  height: 800px;
  margin: 0 auto;
  display: flex;
  ${media.tablet} {
    width: 768px;
    height: 600px;
  }
  ${media.mobile} {
    width: 100vw;
    margin: 0 10px;
    height: 60vw;
  }
`;
const MainContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-top: 240px;
  .mainTitle {
    margin-bottom: 16px;
  }
  .mainLink {
    display: inline-block;
    width: 266px;
    height: 53px;
    border-radius: 999px;
    text-decoration: none;
    background-color: ${({ theme }) => theme.color.waterblue};
    margin-top: 38px;
    p {
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
      color: ${({ theme }) => theme.color.white};
    }
    .mobile {
      display: none;
    }
  }
  ${media.tablet} {
    flex: 1;
    margin-top: 180px;
    .mainLink {
      width: 240px;
      height: 46px;
      margin-top: 16px;
    }
  }
  ${media.mobile} {
    flex: 1;
    margin: 0 auto;
    margin-top: 16vw;

    .mainLink {
      width: 170px;
      height: 40px;
      .main {
        display: none;
      }
      .mobile {
        display: flex;
      }
    }
  }
`;
const MainImage = styled.div`
  margin-top: 100px;
  flex: 1;
  img {
    width: 526px;
    height: 584px;
    ${media.tablet} {
      width: 360px;
      height: 407px;
    }
    ${media.mobile} {
      width: 30vw;
      height: 36vw;
    }
  }
  ${media.tablet} {
    flex: 0;
  }
  ${media.mobile} {
    margin-top: 40px;
    flex: 1;
  }
`;

// CAPTURE
const CaptureSection = styled.div`
  width: 1200px;
  height: 600px;
  margin: 0 auto;
  display: flex;
  ${media.tablet} {
    width: 768px;
    height: 450px;
    box-sizing: border-box;
  }
  ${media.mobile} {
    width: 100vw;
    height: 40vw;
  }
`;
const CaptureImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;

  .flash {
    width: 62px;
    height: 58px;
    position: absolute;
    top: 140px;
    left: 70px;
    }
  }
  .ipad {
    width: 417px;
    height: 378px;
    margin-top: 100px;
  }
  ${media.tablet} {
    .flash {
      width: 40px;
      height: 36px;
      top: 160px;
      left: 10px;
    }
    .ipad {
      width: 380px;
      height: 328px;
    }
  }
  ${media.mobile} {
    .flash {
      width: 5vw;
      height: 6vw;
      top: 15vw;
      left: 4vw;
    }
    .ipad {
      width: 40vw;
      height: 38vw;
      margin-top: 10vw;
    }
  }
`;
const CaptureContent = styled.div`
  flex: 1;
  .captureTitle {
    margin-top: 180px;
    margin-bottom: 12px;
  }
  .mobile {
    display: none;
  }
  ${media.tablet} {
    padding-left: 20px;
  }
  ${media.mobile} {
    h2 {
      margin-top: 16vw;
      font-size: 17px;
      margin-bottom: 1vw;
    }
    p {
      font-size: 14px;
    }
    .main {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
`;

// REFRIGE
const RefrigeSection = styled.section`
  height: 500px;
  position: relative;

  img {
    width: 437px;
    height: 380px;
  }

  ${media.tablet} {
    height: 300px;
    img {
      width: 280px;
      height: 220px;
    }
  }
  ${media.mobile} {
    height: 60vw;
  }
`;
const RefrigeInner = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  ${media.tablet} {
    width: 768px;
    top: 10%;
    left: 50%;
  }
  ${media.mobile} {
    width: 100vw;
    top: 10%;
  }
`;
const RefrigeImage = styled.div`
  flex: 1;
  .webBack {
    position: relative;
  }
  .webFront {
    position: absolute;
    top: 30px;
    left: 40px;
  }
  ${media.tablet} {
    flex: 0.6;
    .webBack {
      top: 50px;
      left: -15px;
    }
    .webFront {
      top: 70px;
      left: 0px;
    }
  }
  ${media.mobile} {
    .webBack {
      width: 50vw;
      height: 40vw;
    }
    .webFront {
      width: 50vw;
      height: 40vw;
    }
  }
`;
const RefrigeContent = styled.div`
  flex: 1;
  margin-top: 120px;
  .refrigeTitle {
    margin-bottom: 12px;
  }
  ${media.tablet} {
    flex: 1;
  }
  ${media.mobile} {
    margin-top: 24vw;
    h2 {
      font-size: 16px;
      word-break: keep-all;
      padding-left: 1vw;
    }
  }
`;
const RefrigeBackground = styled.div`
  width: 100vw;
  height: 218px;
  margin-top: 240px;
  background-color: #f5f5f5;
  ${media.tablet} {
    height: 180px;
  }
  ${media.mobile} {
    height: 30vw;
    margin-top: 40vw;
  }
`;

//BOOKMARK
const BookmarkSection = styled.section`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  margin-top: 160px;
  ${media.tablet} {
    width: 768px;
  }
  ${media.mobile} {
    display: block;
    width: 100vw;
    margin-top: 0px;
  }
`;
const BookmarkImage = styled.div`
  flex: 1;
  position: relative;

  .like {
    width: 84px;
    height: 85px;
    position: absolute;
    top: -50px;
    left: 100px;
    animation: beatEffect 0.25s ease infinite alternate;
    @keyframes beatEffect {
      from {
      }
      to {
        transform: scale(1.1);
      }
    }
  }
  .bookmark {
    width: 378px;
    height: 395px;
  }
  ${media.mobile} {
    .like {
      width: 15vw;
      height: 15vw;
      top: -10%;
      left: 10%;
    }
    .bookmark {
      width: 52vw;
      height: 60vw;
    }
  }
`;
const BookmarkContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    margin-bottom: 12px;
  }
  ${media.mobile} {
    h2 {
      margin-bottom: 20vw;
    }
    display: block;
    text-align: end;
    padding-right: 10vw;
  }
`;

const Bottomstyle = styled.div`
  height: 30vh;
  display: flex;
  background-color: #4aa8d8;

  ${media.mobile} {
    height: 30vw;
    margin-top: 120px;
  }
`;

const GoTopButton = styled.button`
  position: fixed;
  z-index: 2;
  right: 3vw;
  top: 80vh;
  width: 48px;
  height: 48px;
  border: none;
  background-color: #fff;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.05);
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.4;

  &:hover {
    opacity: 1;
    p {
      display: block;
    }
  }

  img {
    width: 32px;
    height: 32px;
  }
  p {
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    display: none;
    color: ${({ theme }) => theme.color.black};
    ${({ theme }) => theme.font.bold};
  }
  ${media.tablet} {
    width: 44px;
    height: 44px;
    top: 90vh;
    p {
      top: 48px;
    }
    img {
      width: 24px;
      height: 24px;
    }
  }
  ${media.tablet} {
    width: 40px;
    height: 40px;
    img {
      width: 22px;
      height: 22px;
    }
  }
`;

export default Home;
