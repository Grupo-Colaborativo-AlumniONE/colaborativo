package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import repository.MiembroEquipoRepository;
import model.MiembroEquipo;

@RestController
@RequestMapping("/MiembroEquipo")
public class MiembroEquipoController {
    private final MiembroEquipoRepository miembroEquipoRepository;

    @Autowired
    public MiembroEquipoController(MiembroEquipoRepository miembroEquipoRepository) {
        this.miembroEquipoRepository = miembroEquipoRepository;
    }

    // Método para crear un nuevo miembro del equipo
    @PostMapping
    public MiembroEquipo crearMiembroEquipo(@RequestBody MiembroEquipo miembroEquipo) {
        return miembroEquipoRepository.save(miembroEquipo);
    }

    // Método para actualizar un miembro del equipo existente
    @PutMapping("/{id}")
    public MiembroEquipo actualizarMiembroEquipo(@PathVariable Long id, @RequestBody MiembroEquipo miembroEquipoActualizado) {
        MiembroEquipo miembroEquipo = miembroEquipoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Miembro del equipo no encontrado con ID: " + id));

        // Actualizar los campos necesarios del miembro del equipo
        miembroEquipo.setNombre(miembroEquipoActualizado.getNombre());
        miembroEquipo.setCargo(miembroEquipoActualizado.getCargo());

        return miembroEquipoRepository.save(miembroEquipo);
    }

    // Método para obtener un miembro del equipo por su ID
    @GetMapping("/{id}")
    public MiembroEquipo obtenerMiembroEquipo(@PathVariable Long id) {
        return miembroEquipoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Miembro del equipo no encontrado con ID: " + id));
    }

    // Método para eliminar un miembro del equipo por su ID
    @DeleteMapping("/{id}")
    public void eliminarMiembroEquipo(@PathVariable Long id) {
        miembroEquipoRepository.deleteById(id);
    }
}