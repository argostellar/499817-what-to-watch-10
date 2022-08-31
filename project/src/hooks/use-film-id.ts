import { useParams } from 'react-router-dom';

export const useFilmId = () => {
  const { id } = useParams();
  return id !== undefined ? Number(id) : 0;
};
