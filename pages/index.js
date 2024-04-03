import { useEffect, useState } from "react";
import { useSpring, animated, config } from 'react-spring';
import Card from "@/components/home/Card";

import Layout from "@/components/Layout";
import Slider from "@/components/Slider";
import Form from "@/components/Form";

export default function Home() {


  
  // Define animation properties
  const sliderAnimation = useSpring({ 
    from: { opacity: 0, transform: 'translateY(500px)' }, 
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: config.slow, // Adjust duration here
    delay: 1000 // Delay for staggered animation
  });

  const cardAnimation = useSpring({ 
    from: { opacity: 0, transform: 'translateY(500px)' }, 
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: config.slow, // Adjust duration here
    delay: 2000 // Delay for staggered animation
  });

  const formAnimation = useSpring({ 
    from: { opacity: 0, transform: 'translateY(500px)' }, 
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: config.slow, // Adjust duration here
    delay: 3000 // Delay for staggered animation
  });



  return (
    <Layout>
      <animated.div style={sliderAnimation}>
        <Slider />
      </animated.div>

      <animated.div style={cardAnimation}>
        <Card/>
      </animated.div>

      <animated.div style={formAnimation}>
        <Form/>
      </animated.div>

    </Layout>
  );
}
