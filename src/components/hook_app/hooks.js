import { useState } from "react";

export function useForm() {
    const [formData, setFormData] = useState({});

    const handleSubmit = (callback) => {
        return (event) => {
            event.preventDefault();
            callback(formData);
        }
    }

    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        // formData = {name: 'a', code: 'b'}
        const newFormData = { ...formData }; // tạo 1 đối tượng mới với thuộc tính và giá trị của đối tượng formData
        // -> newFormData = {name: 'a', code: 'b'}
        // name = 'a', value = '1234'
        newFormData[name] = value;
        // -> newFormData = {a: '1234', name: 'a', code: 'b'}

        setFormData(newFormData);
    }

    const validateData = () => {

    }

    return {
        message: "hello, this is custom hook to handle form",
        handleSubmit,
        handleInputChange,
        validateData
    };
}