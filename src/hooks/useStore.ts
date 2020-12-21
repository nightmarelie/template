import { RootState } from 'store/reducer';
import { useSelector } from 'react-redux';
import get from 'lodash.get';

export default <T>(path: string) => {
  return useSelector<RootState, T>((state: RootState) => get(state, path));
};
