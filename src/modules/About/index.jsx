import { useMediaQuery } from 'usehooks-ts';
import style from './Styles.module.scss';
import img from './assets/img.png';
import img2x from './assets/img@2x.png';
import imgMobile from './assets/img-mobile.jpg';
import imgMobile2x from './assets/img-mobile@2x.jpg';
import textImg from './assets/text.png';
import textImg2x from './assets/text@2x.png';
import textImgMobile from './assets/text-mobile.png';
import textImgMobile2x from './assets/text-mobile@2x.png';

const AboutSection = () => {
  const isMobile = useMediaQuery('(max-width:767px)');

  return (
    <section id='about' className={style.about}>
      {isMobile && (
        <div className={style.about__img}>
          <img
            src={imgMobile}
            srcSet={`${imgMobile} 1x, ${imgMobile2x} 2x`}
            alt=''
          />
        </div>
      )}
      <div className={`${style.con} 'container'`}>
        <div className={style.aboutBody}>
          <div className={style.aboutBody__img}>
            {!isMobile && (
              <img src={img} srcSet={`${img} 1x, ${img2x} 2x`} alt='' />
            )}
          </div>
          <div className={style.aboutBody__text}>
            <img
              src={isMobile ? textImgMobile : textImg}
              srcSet={`${isMobile ? textImgMobile : textImg} 1x, ${
                isMobile ? textImgMobile2x : textImg2x
              } 2x`}
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
