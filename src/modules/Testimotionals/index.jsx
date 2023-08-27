import style from './Styles.module.scss';
import imgTitle from './assets/title.png';
import imgTitle2x from './assets/title@2x.png';
import img from './assets/img.png';
import img2x from './assets/img@2x.png';
import imgMobile from './assets/img-mobile.png';
import imgMobile2x from './assets/img-mobile@2x.png';
import { useMediaQuery } from 'usehooks-ts';

const TestimotionalsSection = () => {
  const isMobile = useMediaQuery('(max-width:767px)');

  return (
    <section className={style.block}>
      <div className='container'>
        <div className={style.block__title}>
          <img
            src={imgTitle}
            srcSet={`${imgTitle} 1x, ${imgTitle2x} 2x`}
            alt=''
          />
        </div>
        <div className={style.block__img}>
          <img
            src={isMobile ? imgMobile : img}
            srcSet={`${isMobile ? imgMobile : img} 1x, ${
              isMobile ? imgMobile2x : img2x
            } 2x`}
            alt=''
          />
        </div>
      </div>
    </section>
  );
};

export default TestimotionalsSection;
