import style from './Styles.module.scss';
import plate from './assets/plate.png';
import plate2x from './assets/plate@2x.png';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className='container'>
        <div className={style.footer__title}>Join our community</div>
        <div className={style.footer__text}>
          Our community is expanding rapidly. Please follow our social platforms
          to stay up-to-date, <br /> connect with community members and be the
          first to hear the latest.
        </div>
        <div className={style.footerLinks}>
          <a href='' className={style.footerLinks__item}>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='31'
                height='32'
                viewBox='0 0 31 32'
                fill='none'
              >
                <path
                  d='M14.3455 17.5442L13.1585 15.8442L3.7105 2.33724H7.7795L15.4025 13.2372L16.5895 14.9372L26.4985 29.1112H22.4315L14.3455 17.5442ZM26.4975 0.344238L16.7975 11.6212L9.0475 0.344238H0.110497L11.8275 17.3972L0.110497 31.0162H2.7585L13.0035 19.1072L21.1865 31.0162H30.1235L17.9715 13.3312L29.1445 0.344238H26.4975Z'
                  fill='#1F1E29'
                />
              </svg>
            </span>
            Twitter
          </a>
          <a href='' className={style.footerLinks__item}>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='37'
                height='31'
                viewBox='0 0 37 31'
                fill='none'
              >
                <path
                  d='M24.8662 9.02375L11.8374 17.8447C11.2799 18.2223 10.6451 18.4708 9.97929 18.572C9.31351 18.6732 8.63355 18.6245 7.98895 18.4296C7.98895 18.4296 2.09269 16.6493 1.84463 16.5727C1.59657 16.4962 1.27195 16.3686 1.27195 16.3686C1.10241 16.284 0.958721 16.1554 0.855946 15.9962C0.753171 15.837 0.695088 15.6532 0.687782 15.4638C0.680477 15.2745 0.724216 15.0867 0.814419 14.9201C0.904623 14.7535 1.03797 14.6142 1.2005 14.5168C1.2005 14.5168 2.04778 14.0115 2.50817 13.8165L32.7683 1.01133C35.1346 -0.106469 36.4433 1.11341 36.2391 2.49356L32.4202 27.9743C32.3877 28.3507 32.2673 28.7142 32.0689 29.0357C31.8705 29.3573 31.5994 29.6278 31.2776 29.8257C30.9557 30.0236 30.592 30.1433 30.2155 30.1753C29.8391 30.2073 29.4603 30.1506 29.1097 30.0098C28.0883 29.6399 27.1119 29.1557 26.1994 28.5663C25.6318 28.1835 19.3313 23.9645 19.3313 23.9645C19.3313 23.9645 16.4669 22.0147 16.2525 21.0664C16.2071 20.7484 16.2368 20.4243 16.3393 20.1199C16.4418 19.8155 16.6141 19.5394 16.8425 19.3136L26.6016 10.0497C26.6016 10.0497 27.9092 8.59194 27.4907 8.08357C27.0722 7.57521 24.8692 9.02375 24.8692 9.02375'
                  fill='#1F1E29'
                />
              </svg>
            </span>
            Telegram
          </a>
        </div>
        <div className={style.footer__plate}>
          <img src={plate} srcSet={`${plate} 1x, ${plate2x} 2x`} alt='' />
        </div>
        <div className={style.footerInfo}>
          <div className={style.footerInfo__item}>
            CA: 0x43d7e65b8f0000000000
          </div>
          <div className={style.footerInfo__item}>Cartman@SouthParkInuBot</div>
        </div>
        <div className={style.footer__cr}>© 2023 SouthParkInuBot</div>
      </div>
    </footer>
  );
};

export default Footer;
