import { BallTriangle } from 'react-loader-spinner';
import css from './Loader.module.css'
export const Loader = () => {
    return (
     <div className={css.loader}>
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#6c4da9"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
          speed={0.6} 
        />
       </div>
    );
  };