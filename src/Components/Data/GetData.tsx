import React from 'react';
import { SEC_KEY } from '../../Constants/Key';
import { Endpoints, EndpointRoutes } from '../../Constants/Endpoints';

export const Data = () => {
  const url = Endpoints.SEC + SEC_KEY;
  console.log(url);
  return <h1>{}</h1>;
};
