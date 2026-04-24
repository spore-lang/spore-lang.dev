import { normalizePath } from "@/i18n/blog";

export type PaginationPage<T> = {
  currentPage: number;
  data: T[];
  lastPage: number;
  url: {
    next?: string;
    prev?: string;
  };
};

function getPageUrl(basePath: string, pageNumber: number) {
  return pageNumber === 1
    ? normalizePath(basePath)
    : normalizePath(`${basePath}/${pageNumber}`);
}

export function buildPaginatedPaths<T>(
  items: T[],
  pageSize: number,
  basePath: string
) {
  const lastPage = Math.max(1, Math.ceil(items.length / pageSize));

  return Array.from({ length: lastPage }, (_, index) => {
    const currentPage = index + 1;

    return {
      params: { page: currentPage === 1 ? undefined : String(currentPage) },
      props: {
        page: {
          currentPage,
          data: items.slice(index * pageSize, currentPage * pageSize),
          lastPage,
          url: {
            next:
              currentPage < lastPage
                ? getPageUrl(basePath, currentPage + 1)
                : undefined,
            prev:
              currentPage > 1
                ? getPageUrl(basePath, currentPage - 1)
                : undefined,
          },
        } satisfies PaginationPage<T>,
      },
    };
  });
}
