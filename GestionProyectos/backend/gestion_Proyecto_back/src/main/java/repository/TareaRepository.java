package repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TareaRepository<Tarea> extends JpaRepository<Tarea, Long> {
    // Agrega métodos personalizados según tus necesidades
}