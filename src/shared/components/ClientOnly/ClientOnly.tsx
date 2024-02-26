import { FC, PropsWithChildren, useEffect, useState } from 'react';

const ClientOnly: FC<PropsWithChildren> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? <>{children}</> : null;
};

export default ClientOnly;
