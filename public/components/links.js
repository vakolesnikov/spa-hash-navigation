const generateLinkTo = (path, text) => {
  const lnk = document.createElement('a');
  lnk.className = 'btn btn-primary';
  lnk.href = `#${path}`;
  lnk.innerText = text;

  return lnk;
}

const generateLinkBack = (label) => {
  const lnk = document.createElement('a');

  lnk.className = 'btn btn-primary';
  lnk.href = '';
  lnk.innerText = label;

  const goBack = (e) => {
    history.back();
    e.preventDefault();
  }

  lnk.addEventListener('click', goBack);
  // При unmount компонента нужно будет снимать обработчик. На данный момент у меня нет для этого решения.

  return lnk;
}

export { generateLinkTo, generateLinkBack }
