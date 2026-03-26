import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/sidebar.css';

function Sidebar({ onNavigate, activeSection = 'home' }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { id: 'home', icon: 'fas fa-home', label: 'Home' },
    { id: 'about-me', icon: 'fas fa-user', label: 'About' },
    { id: 'skills', icon: 'fas fa-code', label: 'Skills' },
    { id: 'projects', icon: 'fas fa-briefcase', label: 'Projects' },
    { id: 'contact', icon: 'fas fa-envelope', label: 'Contact' },
  ];

  const activeItem = navItems.find((item) => item.id === activeSection) || navItems[0];
  const otherItems = navItems.filter((item) => item.id !== activeSection);

  const getRadialPosition = (index) => {
    const radius = isMobile ? 80 : 80;
    let angle;
    if (isMobile) {
      // Fan UPwards: -180, -120, -60, 0 degrees
      const angles = [-Math.PI, (-2 * Math.PI) / 3, -Math.PI / 3, 0];
      angle = angles[index];
    } else {
      // Fan RIGHTwards: -90, -30, 30, 90 degrees
      const angles = [-Math.PI / 2, -Math.PI / 6, Math.PI / 6, Math.PI / 2];
      angle = angles[index];
    }
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    };
  };

  const handleNavClick = (id) => {
    onNavigate(id);
    setIsHovered(false);
  };

  return (
    <div 
      className="radial-sidebar-container hover-zone"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={() => isMobile && setIsHovered(!isHovered)}
    >
      <div className="radial-menu">
        <AnimatePresence>
          {isHovered && otherItems.map((item, index) => {
            const pos = getRadialPosition(index);
            return (
              <motion.button
                key={item.id}
                className="radial-icon"
                initial={{ x: 0, y: 0, opacity: 0, scale: 0.2 }}
                animate={{ 
                  x: pos.x, 
                  y: pos.y, 
                  opacity: 1, 
                  scale: 1 
                }}
                exit={{ x: 0, y: 0, opacity: 0, scale: 0.2 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 250, 
                  damping: 18, 
                  delay: index * 0.04 
                }}
                onClick={(e) => { e.stopPropagation(); handleNavClick(item.id); }}
                title={item.label}
                whileHover={{ scale: 1.15, backgroundColor: "var(--accent)", color: "#030305" }}
              >
                <i className={item.icon}></i>
              </motion.button>
            );
          })}
        </AnimatePresence>

        <motion.button
          className="radial-icon active-icon"
          onClick={(e) => { 
            e.stopPropagation(); 
            if(isMobile) setIsHovered(!isHovered); 
            else handleNavClick(activeItem.id);
          }}
          whileHover={{ scale: 1.05 }}
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          title={activeItem.label}
        >
          <i className={activeItem.icon}></i>
        </motion.button>
      </div>
    </div>
  );
}

export default Sidebar;
