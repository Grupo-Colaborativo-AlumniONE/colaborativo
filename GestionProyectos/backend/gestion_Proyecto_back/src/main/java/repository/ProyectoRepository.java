package repository;

import model.Proyecto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface ProyectoRepository extends JpaRepository<Proyecto, Long> {
    // Método para buscar proyectos por estado
    List<Proyecto> findByEstado(String estado);

    // Método para buscar proyectos por fecha de inicio
    List<Proyecto> findByFechaInicio(Date fechaInicio);

    // Método para buscar proyectos por rango de fechas de finalización
    List<Proyecto> findByFechaFinalizacionBetween(Date fechaInicio, Date fechaFin);

    // Método para buscar proyectos por nombre y estado
    List<Proyecto> findByNombreAndEstado(String nombre, String estado);

    // Otros métodos personalizados según necesidades

}