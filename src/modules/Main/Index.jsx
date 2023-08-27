import style from './Styles.module.scss';
import img from './assets/img.jpg';
import img2 from './assets/bg-mobile.jpg';
import img2x from './assets/img@2x.jpg';
import plate from './assets/plate.png';
import plate2x from './assets/plate@2x.png';

const MainSection = () => {
  return (
    <section className={style.main}>
      <div className={style.main__bg}>
        <img src={img} srcSet={`${img} 1x, ${img2x}`} alt='' />
        <img src={img2} alt='' />
      </div>

      <div className={`container ${style.con}`}>
        <div className={style.mainBody}>
          <div className={style.mainBody__col}>
            <a href='' className={style.mainBody__link}>
              Twitter
            </a>
            <a href='' className={style.mainBody__link}>
              Telegram
            </a>
          </div>
          <div className={style.mainBody__col}>
            <a href='' className={style.mainBody__link}>
              Audit
            </a>
            <a href='' className={style.mainBody__link}>
              Dextools
            </a>
          </div>
          <div className={style.mainBody__plate}>
            <img src={plate} srcSet={`${plate} 1x, ${plate2x} 2x`} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
