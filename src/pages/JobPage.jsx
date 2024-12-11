import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobPage = () => {
  const { id } = useParams(); // Obtén el parámetro 'id' desde la URL
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        setLoading(true); // Activa el estado de carga
        setError(null); // Limpia errores previos, si los hay
        const res = await fetch(`/api/jobs/${id}`);
        if (!res.ok) throw new Error('Error al obtener el trabajo');
        const data = await res.json();
        setJob(data); // Actualiza el estado con el trabajo recibido
      } catch (err) {
        setError(err.message); // Guarda el mensaje de error
        console.log("Error fetching data:", err);
      } finally {
        setLoading(false); // Desactiva el estado de carga
      }
    };

    if (id) {
      fetchJob(); // Solo realiza la llamada si `id` está disponible
    }
  }, [id]); // Añadimos `id` como dependencia para escuchar cambios

  // Manejo de estados
  if (loading) return <h1>Cargando...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  if (!job) return <h1>Trabajo no encontrado</h1>;

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
      <p><strong>Ubicación:</strong> {job.location}</p>
      <p><strong>Salario:</strong> {job.salary}</p>
    </div>
  );
};

export default JobPage;
