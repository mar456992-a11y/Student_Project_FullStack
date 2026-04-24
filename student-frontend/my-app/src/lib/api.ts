const BASE_URL = "http://localhost:8080/student";

export async function getStudents() {
  const res = await fetch(`${BASE_URL}/getAll`, {
    cache: "no-store",
  });
  return res.json();
}

export async function addStudent(student: {
  name: string;
  address: string;
}) {
  const res = await fetch(`${BASE_URL}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  });

  return res.text();
}