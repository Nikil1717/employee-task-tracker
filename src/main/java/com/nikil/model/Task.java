package com.nikil.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String status; // Pending, In Progress, Completed
    private LocalDate deadline;

    @ManyToOne
    private User assignedTo;

    @ManyToOne
    private User createdBy;
}

