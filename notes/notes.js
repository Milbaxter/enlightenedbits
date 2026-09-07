const cards = [...document.querySelectorAll('.sticky')];
const links = [...document.querySelectorAll('.note-link')];
const board = document.querySelector('.board');
const boardTitle = document.querySelector('.board-title');
const detail = document.querySelector('.detail');
const title = document.querySelector('#detail-title');
const overview = document.querySelector('.overview-link');
let previousId;

function showNote(focus = false) {
  const selected = links.find(link => link.hash === location.hash);
  board.hidden = Boolean(selected);
  boardTitle.hidden = Boolean(selected);
  detail.hidden = !selected;
  for (const link of links) {
    if (selected && link.hash === location.hash) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  }
  if (selected) {
    overview.removeAttribute('aria-current');
    title.textContent = selected.querySelector('strong').textContent;
    document.title = `${title.textContent} — Enlightened Bits`;
    previousId = selected.hash.slice(1);
  } else {
    overview.setAttribute('aria-current', 'page');
    document.title = 'Enlightened Bits — Notes';
  }
  if (focus) {
    const target = selected ? detail : cards.find(card => card.id === previousId)?.querySelector('a') || links.find(link => link.hash === `#${previousId}`) || overview;
    target.focus({ preventScroll: true });
    if (selected) document.querySelector('main').scrollIntoView({ block: 'start' });
  }
}

showNote();
window.addEventListener('hashchange', () => showNote(true));
