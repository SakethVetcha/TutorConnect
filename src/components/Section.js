import React from 'react';
import Dashboard from './Dashboard';
import TutorMatch from './TutorMatch';
import TutorRegister from './TutorRegister';
import ScheduleSession from './ScheduleSession';
import Feedback from './Feedback';
import './Section.css';

const Section = ({ 
  activeSection, 
  setActiveSection,
  tutors,  // Make sure this prop is received
  addTutor,
  selectedTutor,
  setSelectedTutor
}) => {
  return (
    <section className="main-content">
      <div className="page">
        {activeSection === 'dashboard' && <Dashboard setActiveSection={setActiveSection} />}
        {activeSection === 'tutorMatch' && (
          <TutorMatch 
            tutors={tutors}
            setActiveSection={setActiveSection}
            setSelectedTutor={setSelectedTutor}
          />
        )}
        {activeSection === 'registerTutor' && <TutorRegister addTutor={addTutor} />}
        {activeSection === 'scheduleSession' && <ScheduleSession selectedTutor={selectedTutor} />}
        {activeSection === 'feedback' && <Feedback tutors={tutors} />}  {/* Pass tutors here */}
      </div>
    </section>
  );
};

export default Section;