import DsCard from "../Card/DsCard.jsx";
import dsList from "./ds.jsx";
import ButtonWithBg from "../Button/ButtonWithBg.jsx"

const DataStructureList = () => {
    return (
        <div className="max-w-7xl mx-auto gap-[3rem] flex flex-col pb-[7em] ">
            <h1 className="font-bold text-primary text-[1.7em] text-center">Data Structure</h1>
            <div className="flex flex-col sm:flex-row gap-[2rem] flex-wrap justify-center items-center">
                {dsList.map(obj => (<DsCard 
                                            name={obj.name}
                                            type={obj.type}
                                            difficulty={obj.difficulty}
                                            bg={obj.bg}
                                            img={obj.img}
                                        />
                                        )
                                )
                }
            </div>
            <ButtonWithBg
                text="Discover more"
            />
        </div>
    );
};

export default DataStructureList