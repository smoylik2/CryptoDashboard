import {Link, useLocation} from 'react-router-dom';
import * as S from './Header.styles';
import {Urls} from 'src/utils/constants';

const Header = () => {
  const {pathname} = useLocation();

  return (
    <S.Header>
      <S.Button isActive={pathname === Urls.Root}>
        <Link to={Urls.Root}>Currencies</Link>
      </S.Button>
      <S.Button isActive={pathname === Urls.Swap}>
        <Link to={Urls.Swap}>Swap</Link>
      </S.Button>
    </S.Header>
  );
};

export default Header;
