window.addEventListener("load", () => {
  window.addEventListener("keydown", playSound);

  const keys: NodeListOf<HTMLDivElement> = document.querySelectorAll(".key");
  keys.forEach((key) =>
    key.addEventListener("transitionend", (e) => removeTransition(key, e)),
  );
});

const playSound = (e: KeyboardEvent) => {
  const audio: HTMLAudioElement | null = document.querySelector(
    `audio[data-key="${e.code}"]`,
  );
  const divKey: HTMLDivElement | null = document.querySelector(
    `div[data-key="${e.code}"]`,
  );

  if (!audio || !divKey) return;

  divKey.classList.add("playing");

  audio.currentTime = 0;
  audio.play().catch((e) => console.log(e));
};

const removeTransition = (element: HTMLDivElement, e: TransitionEvent) => {
  if (e.propertyName !== "transform") return;
  element.classList.remove("playing");
};
