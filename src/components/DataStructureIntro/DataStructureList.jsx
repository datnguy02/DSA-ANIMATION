import DsCard from "../Card/DsCard.jsx";
import dsList from "./ds.jsx";

const DataStructureList = () => {
    return (<div className="max-w-7xl mx-auto py-[2rem] gap-[5rem] flex flex-col">
                <h1 className="font-bold text-primary text-[1.7em] text-center">Data Structure</h1>
                <div className="flex flex-col sm:flex-row gap-[2rem] flex-wrap justify-center">
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
            </div>
    );
};

export default DataStructureList