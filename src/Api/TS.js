export const fetchInitialTutors = () => {
    return Promise.resolve([
      {
        name: "John Smith",
        year: "4th Year",
        subjects: ["Math", "Physics"],
        availability: "Weekdays 2-5 PM",
        phone: "1234567890",
        cgpa: "3.8"
      }
    ]);
  };