package com.katayi.katayipetitions.model;

public class Signature {
    private String name;
    private String email;

    // Constructor, getters, and setters
    public Signature(String name, String email) {
        this.name = name;
        this.email = email;
    }

    // Getters and setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
