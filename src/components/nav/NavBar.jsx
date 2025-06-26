import Button from "../Button/Button";

const NavBar = () => {
    return (
            <div className="p-[2em] flex max-w-7xl mx-auto justify-between items-end">
                 <h1 className="font-bold text-[1.7em] text-primary">DSA ANIMATION</h1>
                 <div className="md:flex gap-[2rem] items-end hidden">
                    <Button text="Data Structure"/>
                    <Button text="Algorithm"/>
                    <Button text="Login"/>
                 </div>
            </div>
    );
};


export default NavBar;