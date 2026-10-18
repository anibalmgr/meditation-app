import Storage from "expo-sqlite/kv-store";
const MS_PER_MINUTE = 60 * 1000;
const IDLE_COUNTDOWN = {
  active: false,
  startTime: 0,
  duration: 0,
};

interface countdownType {
  active: boolean;
  startTime: number; // miliseconds
  duration: number; // milliseconds
}

export function getCountdown(): countdownType {
  const raw = Storage.getItemSync("countdown");
  if (!raw) {
    const emptyCountdown: countdownType = IDLE_COUNTDOWN;
    return emptyCountdown;
  }
  const countdownJSON: countdownType = JSON.parse(raw);
  return countdownJSON;
}

function calculateRemainingTime(
  startTime: number,
  duration: number,
  now: number,
) {
  const timePassed = now - startTime;
  const remainingTimeRaw = duration - timePassed;
  const remainingTime = remainingTimeRaw >= 0 ? remainingTimeRaw : 0;
  return remainingTime;
}

export function countdown() {
  const countdown = getCountdown();
  while (countdown.active) {
    const now = Date.now();
    const remainingTime = calculateRemainingTime(
      countdown.startTime,
      countdown.duration,
      now,
    );
    if (remainingTime > 0) {
      console.log(remainingTime);
    } else {
      Storage.setItemSync("countdown", JSON.stringify(IDLE_COUNTDOWN));
    }
  }
}

export function startCountdown(duration: number) {
  const countdown: countdownType = {
    active: true,
    startTime: Date.now(),
    duration: duration,
  };

  Storage.setItemSync("countdown", JSON.stringify(countdown));
}
