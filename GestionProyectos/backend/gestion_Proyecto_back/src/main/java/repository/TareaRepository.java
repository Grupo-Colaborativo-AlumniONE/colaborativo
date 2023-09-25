package repository;

import model.Tarea;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TareaRepository extends JpaRepository<Tarea, Long> {
    // Agrega métodos personalizados según tus necesidades

    // Método para buscar una tarea por su nombre
    Tarea findByNombre(String nombre);

    // Método para buscar una tarea por su estado
    Tarea findByEstado(String estado);

    // Método para buscar una tarea por su progreso
    Tarea findByProgreso(int progreso);

    // Otros métodos de búsqueda personalizados...
}