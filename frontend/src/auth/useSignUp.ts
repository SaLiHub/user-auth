import axios from "axios";

export const useSignUp = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const dataToSend = {
            email: data.get('email'),
            password: data.get('password'),
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            username: data.get('username'),
        }
        console.log(dataToSend)

        axios.post(`http://localhost:3001/api/v1/sign-up`, dataToSend)
            .then((res) => {
                console.log(res.data)
            }).catch(e => console.log(e))

    };

    return {
        handleSubmit
    }
}
