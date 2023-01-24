export const getBodyClassListArray = () => {
  return document.body.classList.value.split(" ");
};

export const bodyClassListContains = (searchForString: string) => {
  return document.body.classList.contains(searchForString);
};
