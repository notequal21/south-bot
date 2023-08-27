import style from './Styles.module.scss';
import imgTitle from './assets/title.png';
import imgTitle2x from './assets/title@2x.png';
import imgTitleMobile from './assets/title-mobile.png';
import imgTitleMobile2x from './assets/title-mobile@2x.png';
import imgList from './assets/list.png';
import imgList2x from './assets/list@2x.png';
import imgListMobile from './assets/list-mobile.png';
import imgListMobile2x from './assets/list-mobile@2x.png';
import img from './assets/img.png';
import img2x from './assets/img@2x.png';
import imgMobile from './assets/img-mobile.jpg';
import imgMobile2x from './assets/img-mobile@2x.jpg';
import { useMediaQuery } from 'usehooks-ts';

const HowSection = () => {
  const isMobile = useMediaQuery('(max-width:991px)');

  return (
    <section className={style.how}>
      {isMobile && (
        <div className={style.how__img}>
          <img
            src={imgMobile2x}
            srcSet={`${imgMobile} 1x, ${imgMobile2x} 2x`}
            alt=''
          />
        </div>
      )}

      <div className={`${style.con} 'container'`}>
        <div className={style.howBody}>
          <div className={style.howBody__title}>
            <img
              src={isMobile ? imgTitleMobile : imgTitle}
              srcSet={`${isMobile ? imgTitleMobile : imgTitle} 1x, ${
                isMobile ? imgTitleMobile2x : imgTitle2x
              } 2x`}
              alt=''
            />
          </div>
          <div className={style.howBody__list}>
            <img
              src={isMobile ? imgListMobile : imgList}
              srcSet={`${isMobile ? imgListMobile : imgList} 1x, ${
                isMobile ? imgListMobile2x : imgList2x
              } 2x`}
              alt=''
            />
          </div>
          <div className={style.howBody__img}>
            <img src={img} srcSet={`${img} 1x, ${img2x} 2x`} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSection;
