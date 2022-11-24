export const headerLinkChecker = (path: string, link: string) => {
  if (path === link) {
    return "text-[#B8FE00]";
  } else {
    return "text-white";
  }
};
