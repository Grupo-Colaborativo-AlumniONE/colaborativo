package model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class MiembroEquipo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Otras propiedades del miembro del equipo

    @ManyToMany(mappedBy = "miembrosEquipo")
    private List<Proyecto> proyectos;

    @OneToMany(mappedBy = "miembroEquipo")
    private List<Tarea> tareas;

    // Getters y setters
}
