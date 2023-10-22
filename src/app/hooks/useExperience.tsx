// 'use client';
// import { useEffect, useState } from 'react';
// import { WorkExperience } from '../models/strapi/api';

// async function getExperiences(): Promise<WorkExperience[]> {
//   const res = await fetch('http://localhost:1337/api/work-experiences');

//   return res.json();
// }

// export default function useExperience(): WorkExperience[] {
//   const [experiences, setExperiences] = useState<WorkExperience[]>([]);

//   useEffect(() => {
//     getExperiences().then((experiences) => setExperiences(experiences));
//   }, []);

//   return experiences;
// }
