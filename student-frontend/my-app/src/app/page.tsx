import StudentForm from "@/components/StudentForm";
import StudentTable from "@/components/StudentTable";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-10">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Student Management System
        </h1>

        <StudentForm />
        <StudentTable />

      </div>
    </main>
  );
}