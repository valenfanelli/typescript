import { type FormEvent, type ComponentPropsWithoutRef, useRef, useImperativeHandle, forwardRef } from "react"

type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value: unknown) => void;
};
export type FormHandle = {
    clear: ()=> void;
};
const Form =  forwardRef<FormHandle, FormProps>( function Form({onSave, children, ...otherProps}, ref){
    const form = useRef<HTMLFormElement>(null);
    //Exponer funciones invocables desde un componente a la app
    useImperativeHandle(ref, ()=> {
        return {
            clear(){
                console.log('CLEARING');
                form.current?.reset();
            }
        };
    });
    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        //Extraer la info
        const formData = new FormData(event.currentTarget);
        //Extraer los campos
        const data = Object.fromEntries(formData);
        onSave(data);
    }
    return <form onSubmit={handleSubmit} {...otherProps} ref={form}>
        {children}
    </form>
});
export default Form;