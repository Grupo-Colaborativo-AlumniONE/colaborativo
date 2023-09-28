package repository;

import model.Proyecto;
import model.Tarea;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import model.MiembroEquipo;

import java.util.List;

@Repository
public interface MiembroEquipoRepository extends JpaRepository<MiembroEquipo, Long> {
    // Agrega métodos personalizados según necesidades

    // Método para buscar un miembro del equipo por nombre
    MiembroEquipo findByNombre(String nombre);

    // Método para buscar un miembro del equipo por cargo
    MiembroEquipo findByCargo(String cargo);

    // Método para buscar miembros del equipo por proyecto
    List<MiembroEquipo> findByProyectos(Proyecto proyecto);

    // Método para buscar miembros del equipo por tarea
    List<MiembroEquipo> findByTareas(Tarea tarea);
}