const cards = [...document.querySelectorAll('.sticky')];
const links = [...document.querySelectorAll('.note-link')];
const board = document.querySelector('.board');
const detail = document.querySelector('.detail');
const title = document.querySelector('#detail-title');
const overview = document.querySelector('.overview-link');
let previousId;

function showNote(focus = false) {
  const selected = cards.find(card => `#${card.id}` === location.hash);
  board.hidden = Boolean(selected);
  detail.hidden = !selected;
  for (const link of links) {
    if (selected && link.hash === location.hash) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  }
  if (selected) {
    overview.removeAttribute('aria-current');
    title.textContent = selected.querySelector('h2').textContent;
    document.title = `${title.textContent} — Enlightened Bits`;
    previousId = selected.id;
  } else {
    overview.setAttribute('aria-current', 'page');
    document.title = 'Enlightened Bits — Notes';
  }
  if (focus) {
    const target = selected ? detail : cards.find(card => card.id === previousId)?.querySelector('a') || overview;
    target.focus({ preventScroll: true });
    if (selected) document.querySelector('main').scrollIntoView({ block: 'start' });
  }
}

showNote();
window.addEventListener('hashchange', () => showNote(true));
