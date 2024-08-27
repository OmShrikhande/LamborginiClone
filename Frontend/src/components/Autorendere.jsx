import {useState} from 'react'
import TabButton from './TabButton.jsx'
import { details } from '../assets/data.js'
import './css/Autorendere.css'

function Autorendere(){

    //the use state function
    let [SelectedTopic, setSelectedTopic] = useState('carname')
    
    function handelSelect(selectedButton){
        setSelectedTopic(selectedButton)
   }

    return(
        <>

        <section id ="TabButton">
            <h2>Car Details</h2>
            <menu>
                <TabButton isSelected={SelectedTopic==='carname'} onSelect={() => handelSelect('carname')}>CarName</TabButton>
                <TabButton isSelected={SelectedTopic==='cartypes'} onSelect={() => handelSelect('cartypes')}>CarTypes</TabButton>
                <TabButton isSelected={SelectedTopic==='carbarands'} onSelect={() => handelSelect('carbrands')}>CarBrand</TabButton>
                <TabButton isSelected={SelectedTopic==='feedbacks'} onSelect={() => handelSelect('feedbacks')}>Feedback's</TabButton>
            </menu>

            <div id="tabContent">
                <h3>{details[SelectedTopic].title}</h3>
                <p>{details[SelectedTopic].types}</p>
                <p>{details[SelectedTopic].brands}</p>
            </div>
        </section>
        </>
    )
};

export default Autorendere;