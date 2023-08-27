import style from './Styles.module.scss';
import imgTitle from './assets/title.png';
import imgTitle2x from './assets/title@2x.png';
import imgTextMobile from './assets/text-mobile.png';
import imgTextMobile2x from './assets/text-mobile@2x.png';
import imgSubTitle from './assets/subtitle.png';
import imgSubTitle2x from './assets/subtitle@2x.png';
import img from './assets/img.png';
import img2x from './assets/img@2x.png';
import { useMediaQuery } from 'usehooks-ts';

const PlanSection = () => {
  const isMobile = useMediaQuery('(max-width:767px)');

  return (
    <section id='roadmap' className={style.plan}>
      <div className='container'>
        {isMobile && (
          <div className={style.plan__text}>
            <img
              src={imgTextMobile}
              srcSet={`${imgTextMobile2x} 1x, ${imgTextMobile2x} 2x`}
              alt=''
            />
          </div>
        )}
        <div className={style.plan__title}>
          <img
            src={imgTitle}
            srcSet={`${imgTitle} 1x, ${imgTitle2x} 2x`}
            alt=''
          />
        </div>
        <div className={style.plan__subtitle}>
          <img
            src={imgSubTitle}
            srcSet={`${imgSubTitle} 1x, ${imgSubTitle2x} 2x`}
            alt=''
          />
        </div>
      </div>
      <div className={style.plan__img}>
        <img src={img} srcSet={`${img} 1x, ${img2x} 2x`} alt='' />
      </div>
    </section>
  );
};

export default PlanSection;
