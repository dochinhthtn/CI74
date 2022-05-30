import React, {useContext} from 'react';
import { AuthContext } from './models/user';

export default function CurrentProfile() {

    const auth = useContext(AuthContext);
    console.log(auth);

    return (<div className="current-profile">
        <h3>Dữ liệu người dùng đang đăng nhập</h3>
    </div>);
}