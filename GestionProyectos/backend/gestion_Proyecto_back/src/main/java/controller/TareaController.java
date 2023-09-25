package controller;


import model.Tarea;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import repository.TareaRepository;


@RestController
@RequestMapping("/Tarea")
public class TareaController {
    private final TareaRepository tareaRepository;

    @Autowired
    public TareaController(TareaRepository tareaRepository) {
        this.tareaRepository = tareaRepository;
    }
    @PutMapping("/{id}/progreso")
    public Tarea actualizarProgresoTarea(@PathVariable Long id, @RequestParam int progreso) throws Throwable {
        Tarea tarea = (Tarea) tareaRepository.findById(id)
                .orElseThrow(() -> new Tarea.TareaNotFoundException(id));

        tarea.setProgreso(progreso);

        return (Tarea) tareaRepository.save(tarea);
    }

    @GetMapping("/{id}/estado")
    public String obtenerEstadoTarea(@PathVariable Long id) {
        Tarea tarea = tareaRepository.findById(id)
                .orElseThrow(() -> new Tarea.TareaNotFoundException(id));

        return tarea.getEstado();
    }
    // Agregar métodos para crear, actualizar, obtener y eliminar tareas
}