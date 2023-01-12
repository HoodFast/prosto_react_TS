import s from "./OnOff.module.css";

export const Off = () => {
    return (
        <div>
            <span >On     </span>
            <span className={s.styleOffText}>Off</span>
            <span className={s.styleOff}>  __  </span>
        </div>
    )
}