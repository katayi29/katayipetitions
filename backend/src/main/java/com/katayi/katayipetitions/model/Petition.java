package com.katayi.katayipetitions.model;

import java.util.ArrayList;
import java.util.List;

public class Petition {
    private String id;
    private String title;
    private String description;
    private String creator;
    private List<Signature> signatures;

    // Constructor for initialization
    public Petition(String id, String title, String description, String creator) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.creator = creator;
        this.signatures = new ArrayList<>();
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }

    public List<Signature> getSignatures() {
        return signatures;
    }

    public void setSignatures(List<Signature> signatures) {
        this.signatures = signatures;
    }
}
