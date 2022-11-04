import React from 'react';

import { IonButton } from '@ionic/react';

import { Loader } from '../../common/loader';

export const Component: React.FC<{
  onClick: Function;
  isLoading?: boolean;
}> = ({ onClick, isLoading }) => {
  return (
    <React.Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <IonButton size="small" color="warning" onClick={() => onClick()}>
          Delete
        </IonButton>
      )}
    </React.Fragment>
  );
};
