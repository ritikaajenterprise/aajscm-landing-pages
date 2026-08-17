/**
 * Smooth-scrolls to an in-page anchor. Used by every LP CTA.
 * Falls back to `location.hash` assignment if the target isn't mounted
 * yet (e.g. user clicks before hydration completes).
 */
export function scrollToId(id: string, e?: { preventDefault: () => void }) {
  if (e) e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    // Update URL hash without triggering a navigation jump.
    history.replaceState(null, "", `#${id}`);
  } else {
    window.location.hash = id;
  }
}
