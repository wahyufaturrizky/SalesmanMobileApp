import {useMutation, useQuery} from '@tanstack/react-query';
import {client} from '../client';

const fetchGrading = async ({query = {}}) =>
  client('/grading', {
    params: {
      search: '',
      page: 1,
      limit: 10,
      sortBy: 'created_at',
      sortOrder: 'DESC',
      ...query,
    },
  }).then(data => data);

const useGradingList = ({query = {}, options}: any) =>
  useQuery(['grading-list', query], () => fetchGrading({query}), {
    ...options,
  });

const fetchGradingDetail = async ({id}) => {
  return client(`/grading/${id}}`).then(data => data);
};

const useGradingDetail = ({id, options}) =>
  useQuery(['grading-detail', id], () => fetchGradingDetail({id}), {
    ...options,
  });

function useCreateGrading({options}: {options: any}) {
  return useMutation(
    data =>
      client('/grading', {
        method: 'POST',
        data,
      }),
    {
      ...options,
    },
  );
}

function useUpdateGrading({id, options}: {id: string; options: any}) {
  return useMutation(
    data =>
      client(`/product/${id}`, {
        method: 'PUT',
        data,
      }),
    {
      ...options,
    },
  );
}

const useDeleteGrading = ({options}: {options: any}) =>
  useMutation(
    data =>
      client('/product', {
        method: 'DELETE',
        data,
      }),
    {
      ...options,
    },
  );

export {
  useGradingList,
  useGradingDetail,
  useCreateGrading,
  useUpdateGrading,
  useDeleteGrading,
};
