type PagesEnum =
  | "login"
  | "register"
  | "messaging"
  | "profile"
  | "profileEdit"
  | "profilePasswordEdit"
  | "errorPage404"
  | "errorPage500"
  | "navigate";

type PagesNavigateStorageType = Record<
  PagesEnum,
  { page: (context?: unknown) => string; context?: Record<string, unknown> }
>;
