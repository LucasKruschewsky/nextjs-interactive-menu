export const getBodyClassListArray = () => {
  return typeof document !== 'undefined' ? document.body.classList.value.split(" ") : [""];
};

export const bodyClassListContains = (searchForString: string) => {
  return typeof document !== 'undefined' && document.body.classList.contains(searchForString);
};
