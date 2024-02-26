import type { Meta, StoryObj } from '@storybook/react';
import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';

import { EditorProvider } from '../../providers/EditorContext';

import PageInfo from './PageInfo';

const meta: Meta<typeof PageInfo> = {
  component: PageInfo,
  decorators: (Story) => (
    <EditorProvider>
      <AppProvider i18n={enTranslations}>
        <Story />
      </AppProvider>
    </EditorProvider>
  ),
};

export default meta;
type Story = StoryObj<typeof PageInfo>;

export const Default: Story = {};
