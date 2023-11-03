import { Box, Tooltip, Link, ListItemText } from '@mui/material';
import NextLink from 'next/link';

import { StyledItem, StyledIcon, StyledDotIcon } from './styles';
import { NavItemProps } from './types';

// ----------------------------------------------------------------------

export default function NavItem({ item, depth, open, active, isExternalLink, ...other }: NavItemProps) {
  const { title, path, info, children, disabled, caption } = item;

  const subItem = depth !== 1;

  const renderContent = (
    <StyledItem depth={depth} active={active} disabled={disabled} caption={!!caption} {...other}>
      {subItem && (
        <StyledIcon>
          <StyledDotIcon active={active && subItem} />
        </StyledIcon>
      )}

      <ListItemText
        primary={`${title}`}
        secondary={
          caption && (
            <Tooltip title={`${caption}`} placement="top-start">
              <span>{`${caption}`}</span>
            </Tooltip>
          )
        }
        primaryTypographyProps={{
          noWrap: true,
          component: 'span',
          variant: active ? 'subtitle2' : 'body2',
        }}
        secondaryTypographyProps={{
          noWrap: true,
          variant: 'caption',
        }}
      />

      {info && (
        <Box component="span" sx={{ lineHeight: 0 }}>
          {info}
        </Box>
      )}
    </StyledItem>
  );

  const renderItem = () => {
    if (isExternalLink)
      return (
        <Link href={path} target="_blank" rel="noopener" underline="none">
          {renderContent}
        </Link>
      );

    if (children) {
      return renderContent;
    }

    return (
      <Link component={NextLink} href={path} underline="none">
        {renderContent}
      </Link>
    );
  };

  return <> {renderItem()} </>;
}
