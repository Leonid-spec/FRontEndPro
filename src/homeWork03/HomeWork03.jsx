import React from "react";
import Button from "../components/homeButton/HomeButton";

const HomeWork03 = () => {
    const handleClick1 = () => {
        console.log('Button 1 clicked');
    };
    const handleClick2 = () => {
        console.log('Button 2 clicked');
    };
    const handleClick3 = () => {
        console.log('Button 3 clicked');
    };

return (
    <div>
        <h1>HomeWork03: </h1>
        <Button text="Click me!" func={handleClick1} type="button"/>
        <Button text="Click me!" func={handleClick2} type="button"/>
        <Button text="Click me!" func={handleClick3} type="button"/>
    </div>
);
};
export default HomeWork03;