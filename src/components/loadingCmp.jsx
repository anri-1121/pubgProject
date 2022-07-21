import './loadingCmp.scss';
import bullet from '../img/bullet.png';

const LoadingCmp = () => {
  return (
    <div className="loader-wrapper">
      <div className="gun">
        <img src={bullet} alt="" class="bullet"/>
      </div>
      <div className="scope"></div>
      <span className="grip">
        <div className="shooterCircle">
          <span className='shooter'></span>
        </div>
      </span>
    </div>
  );
};

export default LoadingCmp;