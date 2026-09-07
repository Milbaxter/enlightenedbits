const notes = [...document.querySelectorAll('article')];
const links = [...document.querySelectorAll('.note-link')];

function showNote(focus = false) {
  const selected = notes.find(note => `#${note.id}` === location.hash);
  const active = selected || notes[0];
  document.body.classList.toggle('reading', Boolean(selected));
  for (const note of notes) note.hidden = note !== active;
  for (const link of links) {
    if (link.hash === `#${active.id}`) link.setAttribute('aria-current', 'true');
    else link.removeAttribute('aria-current');
  }
  document.title = selected
    ? `${links.find(link => link.hash === location.hash).querySelector('strong').textContent} — Enlightened Bits`
    : 'Enlightened Bits — Notes';
  if (focus) {
    if (selected) active.focus({ preventScroll: true });
    else links.find(link => link.hasAttribute('aria-current')).focus({ preventScroll: true });
    if (matchMedia('(max-width: 620px)').matches) window.scrollTo(0, 0);
  }
}

document.body.classList.add('enhanced');
showNote();
window.addEventListener('hashchange', () => showNote(true));
