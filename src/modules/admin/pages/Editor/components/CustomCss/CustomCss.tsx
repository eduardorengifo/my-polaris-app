import { ArrowLeftIcon } from '@shopify/polaris-icons';
import { Box, Card, Text, useBreakpoints, Button } from '@shopify/polaris';
import CodeMirror from '@uiw/react-codemirror';
import { css } from '@codemirror/lang-css';
import { xcodeLight } from '@uiw/codemirror-theme-xcode';

import { useEditor } from '../../providers/EditorContext';

const CustomCss = () => {
  const { styles, setStyles, setShowActionsBar } = useEditor();
  const breakpoints = useBreakpoints();
  const isXlDown = breakpoints.xlDown;

  const handleChangeStyles = (newStyles: string) => {
    setStyles(newStyles);
  };

  return (
    <Card>
      {isXlDown && (
        <Box paddingBlockEnd="400">
          <Button
            icon={ArrowLeftIcon}
            accessibilityLabel="Close"
            onClick={() => {
              setShowActionsBar(false);
            }}
          />
        </Box>
      )}
      <Text as="h3" variant="headingSm" fontWeight="medium">
        Custom CSS
      </Text>
      <Box paddingBlockStart="200">
        <Text as="p" variant="bodyMd">
          Add custom styles to this page only.
        </Text>
      </Box>
      <Box paddingBlockStart="400">
        <CodeMirror
          placeholder={`#title { background: red } \n#description {} \n#cta {}`}
          height="200px"
          value={styles}
          theme={xcodeLight}
          extensions={[css()]}
          onChange={handleChangeStyles}
        />
      </Box>
    </Card>
  );
};

export default CustomCss;
