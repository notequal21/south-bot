import { useMediaQuery } from 'usehooks-ts';
import style from './Styles.module.scss';
import img from './assets/img.png';
import img2x from './assets/img@2x.png';
import imgMobile from './assets/img-mobile.jpg';
import imgMobile2x from './assets/img-mobile@2x.jpg';

const TokenomicsSection = () => {
  const isMobile = useMediaQuery('(max-width:767px)');

  return (
    <section id='tokenomiks' className={style.tokenomics}>
      <div className={`${style.con} container`}>
        <div className={style.tokenomics__img}>
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

export default TokenomicsSection;
