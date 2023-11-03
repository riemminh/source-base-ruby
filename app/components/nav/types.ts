import { StackProps, ListItemButtonProps } from '@mui/material';

export type INavItem = {
  item: NavListProps;
  depth: number;
  open?: boolean;
  active?: boolean;
  isExternalLink?: boolean;
};

export type NavItemProps = INavItem & ListItemButtonProps;

export type NavListProps = {
  title: string;
  path: string;
  info?: React.ReactElement;
  caption?: string;
  disabled?: boolean;
  children?: any;
};

export interface NavSectionProps extends StackProps {
  data: {
    items: NavListProps[];
  }[];
}

export type StyledDotIconProps = {
  active?: boolean;
};

export type StyledItemProps = Omit<NavItemProps, 'item'> & {
  caption?: boolean;
  disabled?: boolean;
};
