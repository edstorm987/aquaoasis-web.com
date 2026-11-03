export function resetAquaBotChallenge(form: HTMLFormElement) {
  const challenge = (window as typeof window & {
    AquaBotChallenge?: { reset(target: HTMLFormElement): void };
  }).AquaBotChallenge;
  challenge?.reset(form);
}
