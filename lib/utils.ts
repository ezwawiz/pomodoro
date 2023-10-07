// import { useTimerContext } from "@/context/timer-context";

// export const { setTimerStarted, durationId, setSeconds, WORK, SHORTBREAK, LONGBREAK } = useTimerContext()

// export const reset = () => {

//     setTimerStarted(false);

//     if (durationId.current == 0) {
//         setSeconds(WORK);
//     } else if (durationId.current == 1) {
//         setSeconds(SHORTBREAK);
//     } else {
//         setSeconds(LONGBREAK);
//     }
// }

export const reset = (
    setTimerStarted: React.Dispatch<React.SetStateAction<boolean>>,
    durationId: React.MutableRefObject<number>,
    setSeconds: React.Dispatch<React.SetStateAction<number>>,
    WORK: number,
    SHORTBREAK: number,
    LONGBREAK: number
) => {
    setTimerStarted(false);

    if (durationId.current === 0) {
        setSeconds(WORK);
    } else if (durationId.current === 1) {
        setSeconds(SHORTBREAK);
    } else {
        setSeconds(LONGBREAK);
    }
};