import { List, Stack } from '@mui/material';

import NavList from './NavList';
import { NavSectionProps } from './types';

// ----------------------------------------------------------------------

function NavSectionVertical({ data, sx, ...other }: NavSectionProps) {
  return (
    <Stack sx={sx} {...other}>
      {data.map((group) => {
        const key = group.items[0].title;
        return (
          <List key={key} disablePadding sx={{ px: 2 }}>
            {group.items.map((list) => (
              <NavList key={list.title + list.path} data={list} depth={1} hasChild={!!list.children} />
            ))}
          </List>
        );
      })}
    </Stack>
  );
}

export default NavSectionVertical;
