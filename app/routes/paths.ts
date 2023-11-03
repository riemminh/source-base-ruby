// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS = '/';

// ----------------------------------------------------------------------
export const PATH_AUTH = {
  login: path(ROOTS, 'login'),
};

export const PATH_DASHBOARD = {
  profile: path(ROOTS, 'profile'),
};

export const PATH_PAGE = {
  root: ROOTS,
  ...PATH_AUTH,
  ...PATH_DASHBOARD,
};
