import { observer } from "mobx-react-lite";
import { Button } from "./Button";
import '../styles/button-list.css';

export const ButtonList = observer(() => {
    return (
        <div className='buttons__container'>
            <Button value='CE' isBlue={true} />
            <Button value='+/-' isBlue={true} />
            <Button value='%' isBlue={true} />
            <Button value='/' isBlue={true} />
            <Button value='7' />
            <Button value='8' />
            <Button value='9' />
            <Button value='*' isBlue={true} />
            <Button value='4' />
            <Button value='5' />
            <Button value='6' />
            <Button value='-' isBlue={true} />
            <Button value='1' />
            <Button value='2' />
            <Button value='3' />
            <Button value='+' isBlue={true} />
            <Button value='0' />
            <Button value='.' />
            <Button value='=' isBlue={true} />
        </div>
    )
})