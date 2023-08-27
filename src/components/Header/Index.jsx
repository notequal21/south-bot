import { useMediaQuery } from 'usehooks-ts';
import style from './Styles.module.scss';
import { useState } from 'react';

const Header = () => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  const scrollToSection = (section) => {
    setBurgerOpen(false);
    if (section === 'top') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      const item = document.querySelector(`#${section}`);

      window.scrollTo({
        top: item.offsetTop,
        behavior: 'smooth',
      });
    }

    // if (body.classList.contains("lock")) {
    //   body.classList.remove("lock");
    // }
    // if (location.pathname !== "/") {
    //   navigate("/");
    //   setTimeout(() => {
    //     const item = document.querySelector("#about");

    //     window.scrollTo({
    //       top: item.offsetTop,
    //       behavior: "smooth",
    //     });
    //   }, 100);
    // } else {
    //   const item = document.querySelector("#about");

    //   window.scrollTo({
    //     top: item.offsetTop,
    //     behavior: "smooth",
    //   });
    // }
  };

  return (
    <header className={style.header}>
      <div className={`container ${style.con}`}>
        {!isMobile && (
          <div className={style.headerBody}>
            <div
              onClick={() => scrollToSection('top')}
              className={style.headerBody__item}
            >
              Home
            </div>
            <div
              onClick={() => scrollToSection('about')}
              className={style.headerBody__item}
            >
              About
            </div>
            <div
              onClick={() => scrollToSection('tokenomiks')}
              className={style.headerBody__item}
            >
              Tokenomics
            </div>
            <div
              onClick={() => scrollToSection('roadmap')}
              className={style.headerBody__item}
            >
              Roadmap
            </div>
            <div className={style.headerBody__btn}>Buy $SOUTHBOT</div>
          </div>
        )}

        {isMobile && (
          <div
            onClick={() => setBurgerOpen(!isBurgerOpen)}
            className={style.header__burger}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
            >
              <path
                d='M0 1.875C0 0.839466 0.839466 0 1.875 0H18.125C19.1605 0 20 0.839466 20 1.875V1.875C20 2.91053 19.1605 3.75 18.125 3.75H1.875C0.839466 3.75 0 2.91053 0 1.875V1.875Z'
                fill='black'
              />
              <path
                d='M0 10C0 8.96447 0.839466 8.125 1.875 8.125H18.125C19.1605 8.125 20 8.96447 20 10V10C20 11.0355 19.1605 11.875 18.125 11.875H1.875C0.839466 11.875 0 11.0355 0 10V10Z'
                fill='black'
              />
              <path
                d='M0 18.125C0 17.0895 0.839466 16.25 1.875 16.25H18.125C19.1605 16.25 20 17.0895 20 18.125V18.125C20 19.1605 19.1605 20 18.125 20H1.875C0.839466 20 0 19.1605 0 18.125V18.125Z'
                fill='black'
              />
            </svg>
          </div>
        )}

        {isMobile && (
          <div className={`${style.headerMenu} ${isBurgerOpen && style.open}`}>
            <div
              onClick={() => scrollToSection('top')}
              className={style.headerMenu__item}
            >
              Home
            </div>
            <div
              onClick={() => scrollToSection('about')}
              className={style.headerMenu__item}
            >
              About
            </div>
            <div
              onClick={() => scrollToSection('tokenomiks')}
              className={style.headerMenu__item}
            >
              Tokenomics
            </div>
            <div
              onClick={() => scrollToSection('roadmap')}
              className={style.headerMenu__item}
            >
              Roadmap
            </div>
            <div className={style.headerMenu__btn}>Buy $SOUTHBOT</div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
