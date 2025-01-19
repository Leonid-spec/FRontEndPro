import React from "react";
import ProfileCard from "../components/profileCard/ProfileCard";

const HomeWork02 = () => {
    const users = [
        {
            avatar: "https://avatars.dzeninfra.ru/get-zen_doc/3707516/pub_607231f2420d4500ed37afa6_607232127a826a210ae70606/scale_1200",
            firstName: "John",
            lastName: "Connor",
            occupation: "Terminator destroyer",
            hobbies: ["guns", "drugs", "rock'n'roll"],
        },
        {
            avatar: "https://cdn.shazoo.ru/c576x256/218983_Gwlg7AB2Mq_2309065_t2sarahconnor2.jpg",
            firstName: "Sarah",
            lastName: "Connor",
            occupation: "Mother of Terminator destroyer",
            hobbies: ["guns", "drugs", "teaching"],
        },
        {
            avatar: "https://i.ucrazy.org/files/pics/2019.11/1573030817_13628834.webp",
            firstName: "Arnie",
            lastName: "Terminator",
            occupation: "Destroyer of all the terminators",
            hobbies: ["guns", "songs singer"],
        },
    ];

    return (
        <div>
            {users.map((user, index) => (
                <ProfileCard
                    key={index}
                    avatar={user.avatar}
                    firstName={user.firstName}
                    lastName={user.lastName}
                    occupation={user.occupation}
                    hobbies={user.hobbies}
                />
            ))}
        </div>
    );
};
export default HomeWork02;