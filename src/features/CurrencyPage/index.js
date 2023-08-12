import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFullList, selectCurrencyList, selectCurrencyStatus} from './state';

const CurrencyPage = () => {
  const dispatch = useDispatch();
  const list = useSelector(selectCurrencyList);
  const {isLoading, isLoaded} = useSelector(selectCurrencyStatus);

  const showList = JSON.stringify(list);

  useEffect(function initPageData() {
    dispatch(fetchFullList());
  }, []);

  return (
    <>
      {isLoading && <h2>Loading ...</h2>}
      {isLoaded && showList}
    </>
  );
};

export default CurrencyPage;
