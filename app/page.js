import React from 'react'
import Card from './Components/Card'
// Utility function to parse a "dd/mm/yyyy" string into a Date object
const parseDate = (dateString) => {
  const [day, month, year] = dateString.split("/");
  return new Date(year, month - 1, day);
}
const Page = () => {
  const data = [
    {
      paper: "OSV",
      date:"08/05/2025",
      startTime:"10:30 AM",
      endTime:"01:00 PM",
    },
    {
      paper: "COA",
      date:"15/05/2025",
      startTime:"10:30 AM",
      endTime:"01:00 PM",
    },
    {
      paper: "DM",
      date:"17/05/2025",
      startTime:"10:30 AM",
      endTime:"01:00 PM",
    },
    {
      paper: "PEM",
      date:"19/05/2025",
      startTime:"10:30 AM",
      endTime:"01:00 PM",
    },
    {
      paper: "OOP",
      date:"23/05/2025",
      startTime:"10:30 AM",
      endTime:"01:00 PM",
    },
  ]
  // Parse the first and the last exam dates
  const firstExamDate = parseDate(data[0].date);
  const lastExamDate = parseDate(data[data.length - 1].date);
  const currentDate = new Date();
  let heading;
  if (currentDate < firstExamDate) {
    heading = "Upcoming Exam";
  } else if (currentDate >= firstExamDate && currentDate <= lastExamDate) {
    heading = "Ongoing Exam";
  } else {
    heading = "Exams Over!!";
  }
  return (
    <>
      <div className="flex flex-col items-center w-full h-full">
        <h1 className="text-4xl md:text-5xl font-bold text-white mt-10 mb-6">
          {heading}
        </h1>
        <div className="flex flex-wrap justify-center">
          {data.map((item, i) => (
            <Card
              key={i}
              index={i + 1}
              paper={item.paper}
              date={item.date}
              startTime={item.startTime}
              endTime={item.endTime}
            />
          ))} 
        </div>
      </div>
    </>
  )
}
export default Page;