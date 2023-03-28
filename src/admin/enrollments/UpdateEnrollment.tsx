import React from 'react';
import { useSWRConfig } from 'swr';
import { updateEnrollment } from '../../graphql/mutations';
import { CreateEnrollmentInput, GetEnrollmentQuery } from '../../API';
import { updateElement } from '../../services/apiMutations';
import { getEnrollment } from '../../graphql/queries';
import { EnrollmentForm } from './EnrollmentForm';

type Props = {
  data: GetEnrollmentQuery;
  isLoading: boolean;
};

export const UpdateEnrollment: React.FC<Props> = ({ data, isLoading }) => {
  const { mutate } = useSWRConfig();

  const updateProd = (updateData: CreateEnrollmentInput) => {
    if (data.getEnrollment?.id) {
      const options = {
        optimisticData: updateData,
        rollbackOnError: true,
      };
      mutate(
        [data.getEnrollment.id, getEnrollment],
        updateElement(updateData, data.getEnrollment.id, updateEnrollment),
        options
      );
    }
  };

  return (
    <EnrollmentForm
      isLoading={isLoading}
      onSubmit={(updateData) => updateProd(updateData)}
      title="Update Order"
      order={data}
    />
  );
};
