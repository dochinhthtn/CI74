import React from "react";

export default function ProfileCard({name, address, photo, age}) {

    return (
        <div className="profile-card">
            <img src={photo} alt="Ảnh đại diện" /><br />
            <b>Họ và tên: {name}</b><br />
            <i>Địa chỉ: {address}</i><br />
            <i>Tuổi: {age}</i><br />
        </div>
    );
}