// // src/components/ScrollAnimate.jsx
// import React, { useRef, useEffect, useState } from 'react';
// import { motion, useAnimation, useViewportScroll } from 'framer-motion';

// const ScrollAnimate = ({ children }) => {
//   const ref = useRef(null);
//   const controls = useAnimation();
//   const { scrollY } = useViewportScroll();
//   const [elementTop, setElementTop] = useState(0);
//   const [elementHeight, setElementHeight] = useState(0);
  
//   useEffect(() => {
//     const onResize = () => {
//       if (ref.current) {
//         setElementTop(ref.current.offsetTop);
//         setElementHeight(ref.current.offsetHeight);
//       }
//     };
//     onResize();
//     window.addEventListener('resize', onResize);
//     return () => window.removeEventListener('resize', onResize);
//   }, [ref]);

//   useEffect(() => {
//     return scrollY.onChange((latest) => {
//       if (latest + window.innerHeight > elementTop + elementHeight * 0.2) {
//         controls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
//       } else {
//         controls.start({ opacity: 0, y: 50 });
//       }
//     });
//   }, [scrollY, elementTop, elementHeight, controls]);

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={controls}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default ScrollAnimate;
