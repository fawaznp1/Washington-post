import React from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import trump1 from '../images/trump1.jpg';

// Sample news data
const newsData = {
  1: {
    title: ' Kochi Celebrates Record-Breaking Rainfall in Kakkanad',
    content:
      'The city of Kochi has experienced a record-breaking monsoon season this year, with Kakkanad witnessing the highest rainfall in decades. The heavy downpour, which began early this monsoon, has led to overflowing rivers, flooded streets, and disrupted daily life for many residents. Local authorities have issued multiple alerts, urging people to stay indoors and avoid unnecessary travel. While the rains have provided much-needed relief from the summer heat, the excessive downpour has raised concerns about infrastructure damage and waterlogging. Businesses in the affected areas have faced disruptions, with many shops and offices remaining closed. On a positive note, the increased rainfall has filled major reservoirs, securing water supply for the upcoming dry months. Environmentalists point out that the city’s drainage system needs significant upgrades to cope with such heavy rainfalls. Residents have expressed mixed reactions, with some appreciating the cooler climate while others struggle with transportation and power outages. The municipal corporation has assured that efforts are underway to clear blocked drains and ensure smooth water flow. This rainfall has brought both challenges and relief to Kochi, making it a memorable monsoon season for the city.',
    image: trump1,
  },
  2: {
    title: ' Historic Win for Indian Cricket Team in World Cup',
    content:
      'In a thrilling final match, the Indian cricket team emerged victorious in the World Cup, securing a historic win against a formidable opponent. The match, held at a packed stadium, saw India chase a challenging target with remarkable poise. Key players delivered stellar performances, with the captain leading from the front. The atmosphere was electric, as fans cheered for every boundary and wicket. This win marks a significant achievement for Indian cricket, as it is the team’s first World Cup triumph in over a decade. The victory has been hailed by cricket enthusiasts across the globe, with social media buzzing with congratulatory messages from fans, celebrities, and politicians alike. The coach and support staff have been praised for their strategic planning and preparation. Analysts believe that this victory could mark the beginning of a new golden era for Indian cricket. The streets of major cities were filled with jubilant fans celebrating the team’s success. Many see this win as a unifying moment for the nation, bringing people together in their love for the sport. The team is expected to return home to a hero’s welcome, with a grand celebration planned by the cricket board.',
    image: trump1,
  },
  3: {
    title: ' Elon Musk Announces New Tesla Cybertruck Launch Date',
    content:
      'Elon Musk has officially announced the launch date for Tesla’s highly anticipated Cybertruck. The new model, which has generated immense buzz since its prototype reveal, promises cutting-edge features and revolutionary design. Musk shared the news on social media, stating that the Cybertruck will be available for pre-orders next month, with deliveries expected to start by early next year. The vehicle boasts a futuristic look, complete with a bulletproof body and ultra-strong glass. Tesla aims to capture the market with this unique offering, targeting adventure enthusiasts and those seeking an all-electric utility vehicle. The announcement has sent waves of excitement across the automotive industry, with Tesla fans eagerly awaiting the launch. Analysts predict that the Cybertruck could disrupt the market for traditional pickups, given its innovative design and electric capabilities. Musk has assured that the production process is on track, despite earlier delays caused by supply chain issues. As anticipation builds, Tesla showrooms are gearing up for a surge in inquiries and bookings. The Cybertruck’s launch could potentially redefine the electric vehicle market, setting new standards for performance and sustainability.',
    image: trump1,
  },
  4: {
    title: ' New AI Technology Revolutionizes Healthcare Sector',
    content:
      'A groundbreaking advancement in artificial intelligence is poised to transform the healthcare industry. Researchers have developed an AI-powered diagnostic tool that can detect diseases with unprecedented accuracy. The new technology uses deep learning algorithms to analyze medical images, helping doctors identify conditions like cancer, heart disease, and neurological disorders at an early stage. This innovation is expected to significantly reduce the time required for diagnosis, allowing for quicker and more effective treatment. The AI tool has already been tested in several hospitals, showing promising results. Patients have expressed optimism about the potential for faster and more accurate diagnoses. Medical professionals believe that the tool could serve as an invaluable aid in clinical settings, particularly in under-resourced areas. However, there are also concerns about data privacy and the ethical implications of using AI in healthcare. Experts are calling for strict regulations to ensure patient information is handled securely. Despite the challenges, the new technology represents a major leap forward for the medical field, offering hope for improved patient outcomes and streamlined healthcare services. If adopted widely, it could become a standard tool in hospitals worldwide within the next few years.',
    image: trump1,
  },
  5: {
    title: ' Massive Fire Breaks Out in Downtown Los Angeles',
    content:
      'A massive fire has broken out in the heart of downtown Los Angeles, causing widespread panic and damage. Firefighters are battling the blaze, which reportedly started in a commercial building. The cause of the fire is yet to be determined, but initial reports suggest it may have been sparked by an electrical fault. The fire has engulfed several adjacent buildings, with thick smoke visible from miles away. Residents have been evacuated as emergency services work tirelessly to control the flames. The city’s fire department has declared a state of emergency, urging people to avoid the area. Traffic has been severely affected, with several roads closed to ensure the safety of bystanders. Authorities are investigating the incident and have promised a full report once the fire is contained. The extent of the damage is still being assessed, but it is expected to run into millions of dollars. This incident has highlighted the need for improved fire safety measures in densely populated urban areas. The response from the fire department has been swift, with multiple units dispatched to the scene. Despite the challenges, no casualties have been reported so far, thanks to the quick action of emergency responders.',
    image: trump1,
  },
  6: {
    title: ' Global Markets React to Unexpected Oil Price Surge',
    content:
      'Global financial markets have been hit by an unexpected surge in oil prices, sending shockwaves through various industries. The sudden rise in prices comes after a significant reduction in oil output by major producers, citing geopolitical tensions and supply chain disruptions. The increase in oil prices has led to a ripple effect, with transportation and manufacturing sectors bearing the brunt of rising costs. Airlines have already announced an increase in ticket prices, while logistics companies are warning of potential delivery delays and higher fees. Economists are concerned that the spike could contribute to higher inflation rates globally, as businesses may pass on the increased costs to consumers. Stock markets have responded with volatility, as investors reassess their portfolios. Analysts suggest that unless production stabilizes soon, the economic impact could be severe, particularly for emerging markets heavily reliant on imported oil. Governments are exploring measures to mitigate the effects, including releasing reserves and negotiating with oil-exporting countries. The sudden hike has also sparked discussions about accelerating the transition to renewable energy sources, as nations seek to reduce their dependence on fossil fuels. The situation remains fluid, and all eyes are on upcoming talks between oil producers and global leaders.',
    image: trump1,
  },
  7: {
    title: ' Breakthrough in Alzheimer’s Research Brings New Hope',
    content:
      'A groundbreaking study in Alzheimer’s research has unveiled a potential treatment that could alter the course of the disease. Scientists have developed a new drug that targets specific proteins in the brain, which are believed to play a key role in the progression of Alzheimer’s. The drug has shown promising results in early clinical trials, significantly improving cognitive function and memory in patients. Researchers are optimistic that this treatment could provide a much-needed breakthrough in the fight against the neurodegenerative disease, which affects millions of people worldwide. The study, conducted by a team of international scientists, involved rigorous testing and analysis over several years. Patients who received the drug reported noticeable improvements in their daily activities and mental clarity. While the findings are still preliminary, they have generated excitement in the medical community, with experts calling it one of the most significant advancements in Alzheimer’s research in recent decades. However, more extensive trials are needed to confirm the drug’s safety and efficacy before it can be made widely available. If successful, this new treatment could drastically improve the quality of life for Alzheimer’s patients and offer hope to families affected by the disease.',
    image: trump1,
  },
  8: {
    title: ' SpaceX Launches Largest Satellite Mission Yet',
    content:
      'SpaceX has successfully launched its largest satellite mission to date, deploying 60 new satellites into low Earth orbit as part of its Starlink project. The launch, which took place at Cape Canaveral, marks a significant milestone in the company’s efforts to create a global satellite network aimed at providing high-speed internet access worldwide. The mission was executed flawlessly, with the Falcon 9 rocket lifting off smoothly and returning to Earth for a safe landing. This latest deployment brings the total number of Starlink satellites in orbit to over 1,500. SpaceX’s CEO, Elon Musk, expressed his excitement about the achievement, noting that the expanded network will significantly enhance internet coverage in remote and underserved areas. The project aims to bridge the digital divide by offering affordable, reliable internet service to users across the globe. While the initiative has faced criticism over concerns about space debris and the impact on astronomical observations, SpaceX has implemented measures to mitigate these issues. The company plans to continue launching satellites at a rapid pace, with the goal of having a fully operational global network within the next few years. Industry experts believe that Starlink could revolutionize the telecommunications sector, providing a viable alternative to traditional internet service providers.',
    image: trump1,
  },
  9: {
    title: ' Major Earthquake Strikes Japan, Triggering Tsunami Warning',
    content:
      'A powerful earthquake has struck off the coast of Japan, prompting authorities to issue a tsunami warning for several regions. The quake, which registered a magnitude of 7.8, was felt across a wide area, including major cities like Tokyo. Buildings swayed, and public transportation systems were temporarily halted as a precaution. Initial reports indicate that the epicenter was located deep under the ocean, reducing the immediate impact on land. However, the threat of a tsunami has led to mass evacuations along the coastline. Emergency services are on high alert, preparing for potential aftershocks and waves. The government has urged residents to move to higher ground and stay tuned to emergency broadcasts. Japan’s seismic experts are closely monitoring the situation, as the country is well-versed in handling earthquakes due to its location along the Pacific Ring of Fire. Early warning systems have likely saved many lives, giving people valuable time to evacuate. While the full extent of the damage is not yet known, there are reports of minor structural damage and some injuries. The international community has offered support, and rescue teams are on standby. The event serves as a reminder of the ongoing risks posed by natural disasters in the region.',
    image: trump1,
  },
  10: {
    title: ' New Species of Bird Discovered in Amazon Rainforest',
    content:
      'Scientists have announced the discovery of a new bird species in the dense jungles of the Amazon rainforest. The bird, characterized by its vibrant plumage and distinctive song, was spotted by a team of biologists conducting research in the region. This discovery is a rare occurrence, as new species are increasingly difficult to find due to extensive exploration and habitat loss. The newly identified bird has been named after the local indigenous community that helped guide researchers through the challenging terrain. The discovery has excited the scientific community, providing new insights into the biodiversity of the Amazon. The bird’s unique features suggest it has adapted well to the specific ecological conditions of its environment. Conservationists are calling for immediate protective measures, as the bird’s habitat is threatened by deforestation and illegal logging activities. The team of scientists plans to conduct further studies to understand the bird’s behavior, diet, and role in the ecosystem. This finding highlights the importance of preserving the Amazon rainforest, which continues to be a treasure trove of undiscovered species and natural wonders. The discovery is a reminder of the incredible diversity of life that still exists in our planet’s most remote areas.',
    image: trump1,
  },
  52:{
    title: 'Massive Whale Migration Takes Scientists by Surprise',
    content:
      'Marine biologists have been stunned by the discovery of a previously unknown whale migration pattern along the coast of New Zealand. Researchers tracking the movements of humpback whales have found that these majestic creatures are swimming farther than ever before, covering vast distances that were not previously recorded. The migration appears to be linked to changes in ocean temperature, prompting the whales to adjust their routes in search of food and breeding grounds. This newfound migration route is a testament to the resilience of marine life in adapting to environmental changes. Scientists are now studying the potential impact of climate change on whale populations and other marine species. The discovery has opened up new avenues of research and raised important questions about how global warming might affect migratory patterns of marine animals.',
    image: trump1,
  },
  53:{
    title: 'Breakthrough in Renewable Energy: Solar Power Efficiency Reaches New Heights',
    content:
      'A groundbreaking study has revealed that solar power technology has reached a new level of efficiency, making it a more viable alternative to fossil fuels. Researchers have developed a new type of photovoltaic cell that captures a broader spectrum of sunlight, significantly improving energy conversion rates. This innovation could revolutionize the renewable energy sector, bringing the world closer to sustainable energy solutions. With the rise of climate change concerns and the urgency to reduce carbon emissions, this development could not have come at a more crucial time. Governments and environmental organizations are now looking at how to rapidly deploy this technology on a large scale, which could reduce dependence on traditional power grids and fossil fuels. The breakthrough also holds promise for reducing the cost of solar energy production, making it accessible to more communities around the world.',
    image: trump1,
  },
  54: {
    title: 'Discovery of Ancient Human Footprints Sparks Debate on Early Human Migration',
    content:
      'Archaeologists have uncovered a set of ancient human footprints in a remote region of the Americas, providing new evidence of early human migration across the continent. The footprints, estimated to be over 15,000 years old, were found in what is now a dry lakebed in the southwestern United States. The discovery has sparked intense debate among scientists regarding the timing and routes of the first human settlers in the Americas. Some researchers believe that these footprints suggest that humans arrived in the Americas much earlier than previously thought, while others argue that the footprints could have been made by a different species. The findings are helping to refine theories about human migration patterns and offer a glimpse into the lives of our distant ancestors.',
    image: trump1,
  }
  ,
  55:
  {
    title: 'Mysterious Underwater City Discovered off the Coast of Egypt',
    content:
      'A team of underwater archaeologists has made an astonishing discovery off the coast of Alexandria, Egypt: the ruins of an ancient city submerged under the Mediterranean Sea. The city, believed to be more than 2,000 years old, includes temples, statues, and remnants of daily life from the Greco-Roman period. Researchers speculate that the city was lost to rising sea levels or an earthquake that caused it to sink into the ocean. The discovery has captivated historians and archaeologists, as it offers new insights into ancient Egyptian and Greek cultures. Plans are underway to explore the site further using advanced technology, which could uncover more artifacts and help researchers piece together the history of the once-thriving city.',
    image: trump1,
  }
  
  
  
};




function NewsDetail() {
  const { newsId } = useParams();
  const news = newsData[newsId];

  if (!news) {
    return <h2>News article not found</h2>;
  }

  return (
    <Container className="my-4">
      {/* Headline Section */}
      <h2 className="text-center mb-4">{news.title}</h2>

      <Row className="align-items-start">
        {/* Image Column (30%) */}
        <Col xs={12} md={4} className="mb-3 mb-md-0">
          <Image
            src={news.image}
            alt="News Image"
            fluid
            rounded
            className="w-100"
          />
        </Col>

        {/* News Content Column (70%) */}
        <Col xs={12} md={8}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            {news.content}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default NewsDetail;
