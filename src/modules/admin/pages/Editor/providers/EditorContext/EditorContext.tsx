import {
  useState,
  createContext,
  useContext,
  ReactNode,
  useCallback,
} from 'react';

interface EditorData {
  styles: string;
  setStyles: (styles: string) => void;
  showModal: boolean;
  toggleModal: () => void;
  showActionBar: boolean;
  setShowActionsBar: (showActionBar: boolean) => void;
}

const EditorContext = createContext<EditorData | undefined>(undefined);

interface EditorProviderProps {
  children: ReactNode;
}

export const EditorProvider: React.FC<EditorProviderProps> = ({ children }) => {
  const [styles, setStyles] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showActionBar, setShowActionsBar] = useState(false);

  const toggleModal = useCallback(() => setShowModal(!showModal), [showModal]);

  return (
    <EditorContext.Provider
      value={{
        styles,
        setStyles,
        showModal,
        toggleModal,
        showActionBar,
        setShowActionsBar,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = (): EditorData => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error('useEditor must be used within a EditorProvider');
  }
  return context;
};

export default EditorContext;
