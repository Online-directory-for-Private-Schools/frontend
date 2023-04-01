import React from 'react';
import SchoolCard from './SchoolCard';
import Footer from './footer'
function App() {
  return (
    <div className="App">
      <SchoolCard
        schoolName="The Higher School Of CS"
        schoolCity="New York"
        googleMapLocation="40.7128,-74.0060"
        favorited={false}
        rating={2}
        description="Le Lore0bureas que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker."
      />
      <Footer />
    </div>
  );
}

export default App;
