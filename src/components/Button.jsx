import '../styles/button.css';
import { useContext } from 'react';
import { Context } from '..';
import { observer } from 'mobx-react-lite';

export const Button = observer(({value, isBlue}) => {
    const {store} = useContext(Context);

    const click = () => {
        switch (value) {
            case 'CE':
                store.resetValue();
                break;

            case '+/-':
                store.setEval();
                store.setSigh();
                break;

            case '=':
                store.setEval();
                break;

            case '%':
                store.setFraction();
                break;
        
            default:
                store.setValue(value);
                break;
        }
    }

    return (
        <button 
            className={`button ${value === '+' ? 'button-max' : ''} ${isBlue ? 'button-blue' : ''}`}
            onClick={click}
        >
            {value}
        </button>
    )
})
