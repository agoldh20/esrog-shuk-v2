export const getJwt = state => state.user.jwt;

export const headers = jwt => ({
  headers: {
    common: {
      Authorization: `Bearer ${ jwt }`,
    },
  },
});
