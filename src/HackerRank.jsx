import React, { useEffect, useState } from 'react';
import './Gfg.css';
import leet from "./hrank.jpg";
import Youtube from "./youtube.jpg";
import Navbar from './Navbar';

function HackerRank() {

 


  const [cards, setCards] = useState([]);
  const [expandedTopics, setExpandedTopics] = useState({});
  const [selectedCards, setSelectedCards] = useState({}); // State to track selected cards for each topic

  // Function to fetch data
  const fetchData = async () => {
    try {
      const response = await fetch('https://kush-sahu.github.io/Final-sheet2.json/cninja.json');
     
      const data = await response.json();
      if (data && data.Sheet1) {
        setCards(data.Sheet1);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {

    const loadSelectedCards = () => {
      const storedSelectedCards = localStorage.getItem('selectedCards');
      if (storedSelectedCards) {
        setSelectedCards(JSON.parse(storedSelectedCards));
      }
    };

    loadSelectedCards();
  }, []);

  const toggleTopic = (topic) => {
    setExpandedTopics((prevExpanded) => ({
      ...prevExpanded,
      [topic]: !prevExpanded[topic]
    }));
  };


  const groupedCards = cards.reduce((acc, card) => {
    const topic = card['Topic:'];
    if (!acc[topic]) {
      acc[topic] = [];
    }
    acc[topic].push(card);
    return acc;
  }, {});

  const handleImageClick = (url) => {
    window.open(url, "_blank");
  };
  
  const handleChoose = (topic, index) => {
    setSelectedCards((prevSelectedCards) => {
      const updatedSelectedCards = { ...prevSelectedCards };
      const topicSelectedCards = updatedSelectedCards[topic] || [];

      if (topicSelectedCards.includes(index)) {

        updatedSelectedCards[topic] = topicSelectedCards.filter((cardIndex) => cardIndex !== index);
      } else {

        updatedSelectedCards[topic] = [...topicSelectedCards, index];
      }

      localStorage.setItem('selectedCards', JSON.stringify(updatedSelectedCards));

      return updatedSelectedCards;
    });
  };

  return (
    <>
    <Navbar/>
    
    <div className="container-App1">

    <h2 id='heading'>450 Top DSA Questions to Crack any Technical Round</h2>
      {Object.entries(groupedCards).map(([topic, cards]) => (
        <div key={topic} className="topic-container-App1">
          <h2 className="topic-heading-App1" onClick={() => toggleTopic(topic)} style={{ backgroundColor: 'rgb(79 168 9)' }} >
            {topic}
          </h2>

          {expandedTopics[topic] && (
            <div className='insideTopic-App1'>
              {cards.map((card, index) => (
                // <div key={index} className="card flex " style={}>
             <   div key={index} className="card flex" style={{ backgroundColor: 'rgb(42 198 12 / 52%)' }}>
                  <div>
                  <button className='gfgimage1' onClick={() => handleChoose(topic, index)} style={{ color: selectedCards[topic] && selectedCards[topic].includes(index) ? 'white' : 'brown', backgroundColor:selectedCards[topic] && selectedCards[topic].includes(index) ? 'rgb(79, 168, 9)':'white' }}>
                      {selectedCards[topic] && selectedCards[topic].includes(index) ? 'Done' : 'Choose'}

                    </button>

                  </div>
                  <div className='Topic'><h3> {card["Topic:"]}</h3></div>
                  <div className='problemname-App1'><h4> {card["Problem: "]}</h4></div>
                  <div className='flex'>
                    <img className='gfgimage' src={Youtube} alt="Thumbnail" onClick={()=>handleImageClick(card.URL1)} />
                    
                    <img className='gfgimage' src={leet} alt="Thumbnail" onClick={() => handleImageClick(card.URL)} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
        
    </div>
    </>
  );
}

export default HackerRank;



