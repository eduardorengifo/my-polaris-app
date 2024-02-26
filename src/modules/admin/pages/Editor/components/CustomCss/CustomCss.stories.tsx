import type { Meta, StoryObj } from '@storybook/react';
import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';

import { EditorProvider } from '../../providers/EditorContext';

import CustomCss from './CustomCss';

const meta: Meta<typeof CustomCss> = {
  component: CustomCss,
  decorators: (Story) => (
    <EditorProvider>
      <AppProvider i18n={enTranslations}>
        <Story />
      </AppProvider>
    </EditorProvider>
  ),
};

export default meta;
type Story = StoryObj<typeof CustomCss>;

export const Default: Story = {};
