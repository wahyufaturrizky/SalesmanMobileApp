import {useMutation} from '@tanstack/react-query';
import {client} from '../client';

function useSignIn({options}: {options: any}) {
  return useMutation(
    data =>
      client('/login', {
        method: 'POST',
        data,
      }),
    {
      ...options,
    },
  );
}

export {useSignIn};
