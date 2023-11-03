'use client';

import { useState, useEffect } from 'react';

import { Collapse } from '@mui/material';
import { usePathname } from 'next/navigation';

import useActiveLink from '@/hooks/useActiveLink';

import NavItem from './NavItem';
import NavSubList from './NavSubList';
import { NavListProps } from './types';

// ----------------------------------------------------------------------

type NavListRootProps = {
  data: NavListProps;
  depth: number;
  hasChild: boolean;
};

export default function NavList({ data, depth, hasChild }: NavListRootProps) {
  const pathname = usePathname();

  const { active, isExternalLink } = useActiveLink(data.path);

  const [open, setOpen] = useState(active);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!active) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <NavItem item={data} depth={depth} open={open} active={active} isExternalLink={isExternalLink} onClick={handleToggle} />

      {hasChild && (
        <Collapse in={open} unmountOnExit>
          <NavSubList data={data.children} depth={depth} />
        </Collapse>
      )}
    </>
  );
}
