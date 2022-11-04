import React from 'react';
import { IonPage } from '@ionic/react';
import { LayoutPage } from '../../common/layout-page';

import { PostList } from '../../epic/post-list';
import { PostCreate } from '../../epic/post-create';

export const Page: React.FC = () => {
  return (
    <IonPage>
      <LayoutPage>
        <PostList />
        <PostCreate />
      </LayoutPage>
    </IonPage>
  );
};
