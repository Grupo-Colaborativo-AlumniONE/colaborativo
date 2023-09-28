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

    // Método para crear una nueva tarea
    @PostMapping
    public Tarea crearTarea(@RequestBody Tarea tarea) {
        return tareaRepository.save(tarea);
    }

    // Método para actualizar una tarea existente
    @PutMapping("/{id}")
    public Tarea actualizarTarea(@PathVariable Long id, @RequestBody Tarea tareaActualizada) {
        Tarea tarea = tareaRepository.findById(id)
                .orElseThrow(() -> new Tarea.TareaNotFoundException(id));

        // Actualizar los campos necesarios de la tarea
        tarea.setNombre(tareaActualizada.getNombre());
        tarea.setDescripcion(tareaActualizada.getDescripcion());
        tarea.setFechaLimite(tareaActualizada.getFechaLimite());
        tarea.setEstado(tareaActualizada.getEstado());
        tarea.setProgreso(tareaActualizada.getProgreso());

        return tareaRepository.save(tarea);
    }

    // Método para obtener una tarea por su ID
    @GetMapping("/{id}")
    public Tarea obtenerTarea(@PathVariable Long id) {
        return tareaRepository.findById(id)
                .orElseThrow(() -> new Tarea.TareaNotFoundException(id));
    }

    // Método para eliminar una tarea por su ID
    @DeleteMapping("/{id}")
    public void eliminarTarea(@PathVariable Long id) {
        tareaRepository.deleteById(id);
    }

    // Método para actualizar el progreso de una tarea
    @PutMapping("/{id}/progreso")
    public Tarea actualizarProgresoTarea(@PathVariable Long id, @RequestParam int progreso) {
        Tarea tarea = tareaRepository.findById(id)
                .orElseThrow(() -> new Tarea.TareaNotFoundException(id));
        tarea.setProgreso(progreso);
        return tareaRepository.save(tarea);
    }

    // Método para obtener el estado de una tarea
    @GetMapping("/{id}/estado")
    public String obtenerEstadoTarea(@PathVariable Long id) {
        Tarea tarea = tareaRepository.findById(id)
                .orElseThrow(() -> new Tarea.TareaNotFoundException(id));
        return tarea.getEstado();
    }
}