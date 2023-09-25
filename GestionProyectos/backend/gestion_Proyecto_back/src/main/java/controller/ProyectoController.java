package controller;

import model.Proyecto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import repository.ProyectoRepository;

import java.util.List;

@RestController
@RequestMapping("/Proyecto")
public class ProyectoController {

    private final ProyectoRepository proyectoRepository;

    @Autowired
    public ProyectoController(ProyectoRepository proyectoRepository) {
        this.proyectoRepository = proyectoRepository;
    }

    @GetMapping
    public List<Proyecto> obtenerTodosLosProyectos() {
        return proyectoRepository.findAll();
    }

    public class ProyectoNotFoundException extends RuntimeException {
        public ProyectoNotFoundException(Long id) {
            super("No se encontró el proyecto con el ID: " + id);
        }
    }


    @PostMapping
    public Proyecto crearProyecto(@RequestBody Proyecto proyecto) {
        return ProyectoRepository.save(proyecto);
    }

    @PutMapping("/{id}")
    public Proyecto actualizarProyecto(@PathVariable Long id, @RequestBody Proyecto proyectoActualizado) {
        return proyectoRepository.findById(id)
                .map(proyecto -> {
                    proyecto.setNombre(proyectoActualizado.getNombre());
                    proyecto.setDescripcion(proyectoActualizado.getDescripcion());
                    proyecto.setFechaInicio(proyectoActualizado.getFechaInicio());
                    proyecto.setFechaFinalizacion(proyectoActualizado.getFechaFinalizacion());
                    proyecto.setEstado(proyectoActualizado.getEstado());
                    return proyectoRepository.save(proyecto);
                })
                .orElseThrow(() -> new ProyectoNotFoundException(id));
    }

    @DeleteMapping("/{id}")
    public void eliminarProyecto(@PathVariable Long id) {
        proyectoRepository.deleteById(id);
    }
}
