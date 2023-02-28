import {useEffect} from 'react'
import { ButtonAtom, InputAtom } from '../../atoms'
import { formProps } from './formTypes'

const FooterForm = ({onSubmit,setMessage,message}:formProps) => {
    const onChange=(e:React.SyntheticEvent)=>{
        setMessage((e.target as HTMLInputElement).value)
    }
    useEffect(()=>{
        console.log(message)
    },[message])
  return (
    <div>
        <InputAtom value={message}  onChange={onChange } button={<ButtonAtom onClick={onSubmit} type={'Primary'} > Send </ButtonAtom>} type={'text'} name={''} id={''} inputType={'textarea'}></InputAtom>
      
    </div>
  )
}

export  {FooterForm}
