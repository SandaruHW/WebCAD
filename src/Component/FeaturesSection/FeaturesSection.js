import React from 'react';
import './FeaturesSection.css';
import featureimg1 from './feature-img1.jpeg';
import featureimg2 from './feature-img2.jpg';
import featureimg3 from './feature-img3.jpg';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Advanced Sketching & 3D Modeling',
      description: 'Create precise 2D sketches, extrude them into 3D, or revolutionize your designs with parametric control.',
      image: featureimg1,
    },
    {
      title: 'Real-Time Collaboration',
      description: 'Work seamlessly with your team across devices with instant updates and version control.',
      image: featureimg2,
    },
    {
      title: 'Cloud-Powered Flexibility',
      description: 'Access your designs anytime, anywhere, with secure cloud storage and cross-device synchronization.',
      image: featureimg3,
    },
  ];

  return (
    <section className="features">
      {features.map((feature, index) => (
        <div
          className={`feature ${index === 1 ? 'feature2' : 'feature1'}`}
          key={index}
        >
          {index === 1 ? (
            <>
              <div className="feature-text">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
              <img src={feature.image} alt={feature.title} />
            </>
          ) : (
            <>
              <img src={feature.image} alt={feature.title} />
              <div className="feature-text">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  );
};

export default FeaturesSection;
