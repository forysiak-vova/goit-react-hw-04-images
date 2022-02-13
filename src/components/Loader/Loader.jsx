import { Grid } from 'react-loader-spinner';
import { Spinner } from './Loader.styled';

// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

function Loader() {
  return (
    <Spinner>
      <Grid color="#00BFFF" height={40} width={80} />
    </Spinner>
  );
}

export default Loader;
