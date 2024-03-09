import { useContext } from 'react';
import { observer } from "mobx-react-lite";
import '../styles/output.css';
import { Context } from "..";

export const Output = observer(() => {
    const {store} = useContext(Context);

    return (
        <div className="output__container">
            <span className="output__equal">
                =
            </span>
            <span className="output__example">
                {store.value}
            </span>
        </div>
    )
})
