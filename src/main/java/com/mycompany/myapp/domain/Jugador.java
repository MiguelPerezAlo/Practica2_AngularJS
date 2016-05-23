package com.mycompany.myapp.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.data.elasticsearch.annotations.Document;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A Jugador.
 */
@Entity
@Table(name = "jugador")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "jugador")
public class Jugador implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @Column(name = "nombre", nullable = false)
    private String nombre;
    
    @NotNull
    @Column(name = "score", nullable = false)
    private Integer score;
    
    @NotNull
    @Column(name = "asistencias", nullable = false)
    private Integer asistencias;
    
    @NotNull
    @Column(name = "rebotes", nullable = false)
    private Integer rebotes;
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }
    
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Integer getScore() {
        return score;
    }
    
    public void setScore(Integer score) {
        this.score = score;
    }

    public Integer getAsistencias() {
        return asistencias;
    }
    
    public void setAsistencias(Integer asistencias) {
        this.asistencias = asistencias;
    }

    public Integer getRebotes() {
        return rebotes;
    }
    
    public void setRebotes(Integer rebotes) {
        this.rebotes = rebotes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Jugador jugador = (Jugador) o;
        if(jugador.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, jugador.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Jugador{" +
            "id=" + id +
            ", nombre='" + nombre + "'" +
            ", score='" + score + "'" +
            ", asistencias='" + asistencias + "'" +
            ", rebotes='" + rebotes + "'" +
            '}';
    }
}
