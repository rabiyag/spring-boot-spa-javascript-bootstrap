package com.rabiya.spa;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class User {
    @Id @GeneratedValue
    private Long id;
    private String name;
    private String email;

    // Getters and setters omitted for brevity
}
