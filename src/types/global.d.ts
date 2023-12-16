type PagesNavigateStorageType = Record<
  string,
  { page: (context?: unknown) => string; context?: Record<string, unknown> }
>;
