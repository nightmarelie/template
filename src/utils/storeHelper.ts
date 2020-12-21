const getDataOrReject = async <T, E, R>(
  getData: () => Promise<T>,
  rejectWithValue: (err: E) => R,
) => {
  try {
    return await getData();
  } catch (err) {
    return rejectWithValue(err);
  }
};

const DEFAULT_META = {
  count: 0,
  total: 0,
  unread: 0,
  page: 1,
  pageCount: 1,
};

export { getDataOrReject, DEFAULT_META };
