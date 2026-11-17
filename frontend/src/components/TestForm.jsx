import api from '../api/axiosInstance';
import { useEffect, useState} from 'react';

export default function TestForm(){
    const [message, setMessage] = useState(null);

    useEffect(() => {
        try const response = await api.get('/users/test')
        setMessage()
    })
}