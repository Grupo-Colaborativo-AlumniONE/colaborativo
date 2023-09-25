package model;


import jakarta.persistence.*;

@Entity
public class Tarea {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Otras propiedades de la tarea
    private int progreso;

    @ManyToOne
    @JoinColumn(name = "proyecto_id")
    private Proyecto proyecto;

    @ManyToOne
    @JoinColumn(name = "miembro_equipo_id")
    private MiembroEquipo miembroEquipo;
    private String estado;

    // otros métodos y anotaciones

    public String getEstado() {
        return estado;
        // Getters y setters
    }

    public void setProgreso(int progreso) {
        this.progreso = progreso;
    }
    public static class TareaNotFoundException extends RuntimeException {
        public TareaNotFoundException(Long id) {
            super("No se encontró la tarea con el ID: " + id);
        }
    }
}