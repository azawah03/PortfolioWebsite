import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};


const Header = () => (
    //TEXT BOXES
    <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Welcome to my site! I am...</p>
            <h1 className="head-text">Abdullah</h1>
          </div>
          <span>👋</span>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Junior C++ Game</p>
          <p className="p-text">Developer with</p>
          <p className="p-text">JavaScript, CSS, & </p>
          <p className="p-text">HTML Experience</p>
        </div>
      </div>

    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      whileHover={{ scale: 1.4 }}
      whileTap={{ scale: 1.0 }}
      transition={{ duration: 0.5, delayChildren: 0.5}}
      className="app__header-img"
    >
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.oretheus3}
        alt="oretheus_logo"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.cpp, images.unreal, images.javascript].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');
