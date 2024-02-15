// ParentComponent.js
import { useClient } from 'next/client';
import News from './news';

const ParentComponent = () => {
  const ClientNews = useClient(News);

  return (
    <div>
      <ClientNews />
    </div>
  );
};

export default ParentComponent;
