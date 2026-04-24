"use client";

import { useEffect, useState } from "react";
import { getStudents } from "@/lib/api";
import { Student } from "@/types/student";

export default function StudentTable() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-x-auto text-black">
      <table className="w-full min-w-[400px]">
        <thead className="bg-gray-400">
          <tr>
            <th className="p-3 text-left text-black-300">ID</th>
            <th className="p-3 text-left text-black-300">Name</th>
            <th className="p-3 text-left text-black-300">Address</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id} className="border-t">
              <td className="p-3">{s.id}</td>
              <td className="p-3">{s.name}</td>
              <td className="p-3">{s.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}