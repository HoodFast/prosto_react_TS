import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UnControlledAccordion/UncontrolledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordeonCollapsed, setAcordeonCollapsed] = useState<boolean>(true)
    const[switchOn,setSwitchOn]=useState<boolean>(false)
    return (
        <div className={"App"}>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"user"}/>
            <UnControlledRating onChange={setRatingValue}/>

            <Accordion titleValue={"Menu"} onChange={() => setAcordeonCollapsed(!accordeonCollapsed)} collapsed={accordeonCollapsed}/>
            {/*<UncontrolledAccordion titleValue={"Users"} />*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>

            <UncontrolledOnOff onChange={setSwitchOn}/> <span>{switchOn.toString()}</span>
            <OnOff on={switchOn} onChange={setSwitchOn} />


        </div>
    )
}

function PageTitle(props: any) {
    return (
        <h1> {props.title} </h1>
    )
}


export default App;
