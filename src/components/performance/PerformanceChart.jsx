import { useParams } from "react-router-dom";
import { getPerformance } from "../../services/getDataMock";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const data = [
  {
    subject: "Math",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Chinese",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "English",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Geography",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "History",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export default function PerformanceChart() {
  // const { userId } = useParams();

  // const user = getPerformance(userId);

  // const chartSubject1 = user.kind[1];
  // console.log(chartSubject1);

  // const chartSubjects = Object.values(user.kind);
  // console.log(chartSubjects);

  // const subjectValues = user.data.map((item) => {
  //   return item.value;
  // });
  // console.log(subjectValues);

  return (
    <div className="performance-wrapper">
      <RadarChart
        width={500}
        height={300}
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </div>
  );
}